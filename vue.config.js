const path = require('path')
const webpack = require('webpack')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  assetsDir: 'static',
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('pages', resolve('src/pages'))
      .set('components', resolve('src/components'))
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        axios: 'axios',
        Vue: 'vue'
      })
    ]
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true
  }
}
