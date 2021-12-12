const pluginConfig = require('./pluginConfig')
const markdownConfig = require('./markdownConfig')
const themeConfig = require('./themeConfig')
module.exports = {
    ...pluginConfig, ...markdownConfig, ...themeConfig
}