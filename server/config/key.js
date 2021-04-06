if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
    console.log('production')
} else {
    module.exports = require('./dev');
    console.log('devlopment enviroment')
}