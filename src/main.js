// 项目入口，配置全局vue
import Vue from 'vue'
import router from './router/'
import Store from './store/index.js'

import './assets/less/index.less'
import App from './App.vue'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)

//加载公共组件
import components from './components/'
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

//全局插件
// import plugins from './plugin'
// Object.keys(plugins).forEach((key) => {
//   Vue.use(plugins[key]);
// })

//全局混合
import minxin from './util/minxins.js'
Vue.mixin(minxin);

new Vue({
	router:router,
	store:Store,
	template:'<App/>',
	components: {App}
}).$mount('#app')

// 默认进入商品模块
router.push({ path: '/home' })
