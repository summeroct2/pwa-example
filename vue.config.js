module.exports = {
  devServer: {
    https: true,
    // host: 'test.api.douban.com',
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  // pwa: {
  //   name: '正在热映x',
  // }
}
