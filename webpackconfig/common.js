const path = require('path');

const base = path.resolve(__dirname, '../');

module.exports = {
    outputDirectory: base + '/dist',
    vueComponentBase: base + '/src/components',
};
