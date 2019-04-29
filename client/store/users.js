//  state should use return like on component
import { ADD_USER_DATA, REMOVE_USER_DATA } from '../utils/mutationsType/users'
import randomString from 'secure-random-string'

export const state = () => ({
  data: '',
  authUser: false
})

export const mutations = {
  [ADD_USER_DATA](state, data) {
    state.data = {
      id: data._id,
      email: data.email,
      role: data.role
    }
    state.authUser = true
  },
  [REMOVE_USER_DATA](state) {
    state.data = ''
    state.authUser = false
  }
}

export const actions = {
  auth({ commit }, data) {
    return this.$axios
      .get('/authorize')
      .then(res => {
        commit(ADD_USER_DATA, res.data.data)
        return res
      })
      .catch(err => {
        return new Error('Not Authorized')
      })
  },
  addUserData({ commit }, data) {
    return new Promise(resolve => {
      const current = this.$cake.get('_sessions')
      if (!current) {
        this.$cake.set('_sessions', randomString(), {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      }
      commit(ADD_USER_DATA, data)
      resolve()
    })
  },
  removeUserData({ commit }) {
    return new Promise(resolve => {
      this.$cake.removeAll()
      commit(REMOVE_USER_DATA)
      resolve()
    })
  }
}

export const getters = {}