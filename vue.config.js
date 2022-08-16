// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  // lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}
