// Setup browser environment
require('browser-env')()
const hooks = require('require-extension-hooks')
const Vue = require('vue')

// Setup Vue.js to remove production tip
Vue.config.productionTip = false

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).exclude(({ filename }) => filename.match(/\/node_modules\//)).plugin('babel').push()
// 🐞 https://github.com/prettier/prettier/issues/5018
window.Date = global.Date = Date
