const {getOptions} = require('loader-utils');
const loaderUtils = require('loader-utils');

console.log('loaderUtils',loaderUtils)
module.exports = function(content) {
    const options = getOptions(this);
    const callback = this.async()
    setTimeout(() => {
        const result = content.replace('monday',options.name)
        console.log('my loader is running111')
        callback(null,result)
    })
}