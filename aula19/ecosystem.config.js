module.exports = {
  apps : [{
    name: "aula19-app",
    script: "./server.js",
    
    // Variáveis de ambiente para Desenvolvimento (Padrão)
    env: {
      NODE_ENV: "development",
      PORT: 3000
    },
    
    // Variáveis de ambiente para Produção (--env production)
    env_production: {
      NODE_ENV: "production",
      PORT: 8080
    }
  }]
};

