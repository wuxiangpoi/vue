// vuex配置
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import user from './modules/user.js'


const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user
  },
  strict: debug
})
