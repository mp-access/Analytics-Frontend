const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/auth', {
            target: 'http://localhost:9999',
            changeOrigin: true,
        }),
        proxy('/metrics', {
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: {
                '^/metrics': '', // remove base path
            },
        }),
        proxy('/api', {
            target: 'http://localhost:8080',
            changeOrigin: true,
        }),
    );
};