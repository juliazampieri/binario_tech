
module.exports = {
  apps: [{
    name: "aula19-app",
    script: "./server.js",

    // Variáveis de ambiente para Desenvolvimento
    env: {
      NODE_ENV: "development",
      PORT: 3017
    },

    // Variáveis de ambiente para Produção
    env_production: {
      NODE_ENV: "production",
      PORT: 3017
    }
  }]
};

