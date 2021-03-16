import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import users from './modules/users';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    users,
  },
})