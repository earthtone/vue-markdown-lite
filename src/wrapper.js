import component from './vue-markdown-lite.vue'

function install (Vue) {
  if (install.installed) {
    return
  }

  install.installed = true
  Vue.component('VueMarkdownLite', component)
}

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use({ install })
}

component.install = install
export default component
