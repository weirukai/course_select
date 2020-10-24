module.export={
    devServer: {
        open: true, //是否自动弹出浏览器页面
        https: false,
        port:8080,
        proxy:{
            '/api' : {
                target: 'http://localhost:8090/', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }


    }

}


