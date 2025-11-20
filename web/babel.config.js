// babel.config.js
module.exports = {
  presets: [
    // Se você já tem outros presets como @babel/preset-env, inclua-os
    '@babel/preset-env', 
    // ⚠️ ESTE É O PRESET OBRIGATÓRIO PARA O JSX:
    '@babel/preset-react', 
  ],
};