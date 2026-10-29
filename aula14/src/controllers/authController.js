
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Simulação de banco de dados em memória
const usuariosDB = [];

const authController = {
  // Cadastrar usuário com hash de senha
  registrar: async (req, res) => {
    try {
      const { email, senha, perfil } = req.body;

      if (!email || !senha) {
        return res.status(400).json({
          mensagem: "Email e senha são obrigatórios."
        });
      }

      // Validar tamanho mínimo da senha
      if (senha.length < 6) {
        return res.status(400).json({
          mensagem: "A senha deve ter pelo menos 6 caracteres."
        });
      }

      const usuarioExiste = usuariosDB.find(u => u.email === email);

      if (usuarioExiste) {
        return res.status(400).json({
          mensagem: "Usuário já cadastrado."
        });
      }

      // Criptografar a senha com salt (fator de custo 10)
      const senhaHash = await bcrypt.hash(senha, 10);

      const novoUsuario = {
        id: usuariosDB.length + 1,
        email,
        senhaHash,
        perfil: perfil || 'OPERADOR'
      };

      usuariosDB.push(novoUsuario);

      res.status(201).json({
        mensagem: "Usuário registrado com sucesso!",
        usuarioId: novoUsuario.id
      });
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao registrar usuário."
      });
    }
  },

  // Login e emissão de JWT
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;

      const usuario = usuariosDB.find(u => u.email === email);

      if (!usuario) {
        return res.status(401).json({
          mensagem: "Credenciais inválidas."
        });
      }

      // Validar a senha informada com o hash salvo
      const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);

      if (!senhaValida) {
        return res.status(401).json({
          mensagem: "Credenciais inválidas."
        });
      }

      // Gerar token JWT com expiração de 15 segundos
      const token = jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          perfil: usuario.perfil
        },
        process.env.JWT_SECRET,
        { expiresIn: '15s' }
      );

      res.status(200).json({
        status: "AUTENTICADO",
        token
      });
    } catch (erro) {
      res.status(500).json({
        erro: "Erro ao realizar login."
      });
    }
  },

  // Rota protegida de teste
  perfil: (req, res) => {
    res.status(200).json({
      mensagem: "Acesso autorizado à rota protegida!",
      dadosUsuarioLogado: req.usuario
    });
  }
};

module.exports = authController;

