module.exports = {
    devServer: {
        proxy: {
            '/index': {
                target: 'http://localhost:3000/index',
                changeOrigin: true,
                pathRewrite: {
                    '^/index': ''
                }
            },
            '/user':{
                target: 'http://localhost:3000/user',
                changeOrigin: true,
                pathRewrite: {
                    '^/user': ''
                }
            },
            '/post':{
                target: 'http://localhost:3000/post',
                changeOrigin: true,
                pathRewrite: {
                    '^/post': ''
                }
            },
            '/login':{
                target: 'http://localhost:3000/login',
                changeOrigin: true,
                pathRewrite: {
                    '^/login': ''
                }
            }
        }
    },
    outputDir: '../backend/public',
}
