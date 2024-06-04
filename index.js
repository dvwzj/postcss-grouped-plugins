"use strict"
const postcss = require('postcss');

function groupedPlugins(options) {
    const plugins = [];
    if (options instanceof Array) {
        options.forEach((option) => {
            if (typeof option === 'string') {
                plugins.push(require(option));
            } else if (typeof option === 'function' && option.postcss) {
                plugins.push(option);
            } else {
                throw new Error('Invalid options');
            }
        });
    } else if (typeof options === 'object') {
        Object.keys(options).forEach((key) => {
            plugins.push(require(key)(options[key]));
        });
    } else {
        throw new Error('Invalid options');
    }
    return {
        postcssPlugin: 'postcss-grouped-plugins',
        Once(root, { result }) {
            return postcss(plugins).process(root, result.opts);
        },
    }
}
groupedPlugins.postcss = true;
module.exports = groupedPlugins;
