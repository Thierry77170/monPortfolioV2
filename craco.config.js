// craco.config.js
const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        // Vous pouvez ajouter des options spécifiques à sass ici
      }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
