import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import StyleModule from './modules/style-module'

Vue.use(Vuex)

let vuexLocal = null
if (process.browser) {
  if (window.localStorage.vuex) {
    const vuex = JSON.parse(window.localStorage.vuex)
    delete vuex.Style
    window.localStorage.setItem('vuex', JSON.stringify(vuex))
  }
  vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })
}

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Style: StyleModule
  },
  plugins: [
    vuexLocal.plugin
  ]
})
