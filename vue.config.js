module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cv/'
    : '/',

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}