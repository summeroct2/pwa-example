const fs = require('fs')

module.exports = {
  devServer: {
    // https: true,
    https: {
      key: fs.readFileSync("./server.key"),
      cert: fs.readFileSync("./server.crt"),
    },
    // host: 'test.api.douban.com',
    // http://news-at.zhihu.com/api/4/news/latest
    proxy: {
      '/api': {
        // target: 'https://api.douban.com/v2',
        target: 'http://news-at.zhihu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
