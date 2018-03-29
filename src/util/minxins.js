'use strict'
const baseUrl = 'http://47.92.116.16:9090';
import Vue from 'vue'
import {
  post,
  fetch,
  patch,
  put
} from './http'
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

export default {
  data() {
    return {
      api: {
        topics: baseUrl + '/api/terminal/getTerminalPageList'
      }
    }
  },
  created() {

  },
  methods: {
    fetch(url, parms, cb) {
      this.$fetch(url, parms).then((res) => {
        cb(res);
      })
    },
    toast(info, type) {
      let option = {
        content: 'I',
        duration: 2
      }
      switch (type) {
        case 'info':
          this.$Message.info(info,option);
          break;
        case 'success':
          this.$Message.success(info,option);
          break;
        case 'warning':
          this.$Message.warning(info,option);
          break;
        case 'error':
          this.$Message.error(info,option);
          break;
      }
    }
  }
}
