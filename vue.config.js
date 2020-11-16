module.exports = {
    devServer: {
        //跨域配置
        proxy: {
            '/api': {
                target: 'http://localhost:8080',//后台接口地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    }
};