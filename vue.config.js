module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8091/',
                pathRewrite: {
                    '/api' : ''
                }
            }
        }
    }
};
