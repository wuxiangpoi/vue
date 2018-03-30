import Vue from 'vue'

const user = {
  state: {
      logined: false,
      root_logo: '',
      name: ''
  },
  mutations: {
    LOGIN: (state, data) => {
      state.logined = true;
      state.name = data.root_account;
      state.root_logo = data.root_logo;
    },
    LOGOUT: (state, data) => {

    }
  },
  actions: {
    login: (o,data) => {
      o.commit('LOGIN',data);
    },
    logout: (o) => {
      o.commit('LOGOUT');
    }
  }
}

export default user;
