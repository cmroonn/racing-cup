import Vue from 'vue';

const usersStore = {
  namespaced: true,

  state: {
    users: [],
  },

  getters: {
    users: ({ users }) => users,
    usersLength: ({ users }) => users.length,

  },

  mutations: {
    ADD_USER(state, user) {
      Vue.set(state.users, state.users.length, user);
    },

    SET_USERS(state, payload) {
      state.users = payload
    }
  },

  actions: {
    addUser({ commit }, user) {
      const newUser = { ...user, id: Math.random(), dateOfReg: new Date().toLocaleDateString('ru') };
      commit('ADD_USER', newUser)
    },

    getUsers({ commit }) {
      Vue.http.get('users.json')
        .then(res => res.json())
        .then(data => commit('SET_USERS', data.users))

    }
  },
}

export default usersStore;