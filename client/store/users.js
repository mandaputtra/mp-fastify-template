//  state should use return like on component
import { ADD_USER_DATA } from '../utils/mutationsType/users'

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
  }
}

export const actions = {
  addUserData({ commit }, data) {
    return new Promise(resolve => {
      commit(ADD_USER_DATA, data)
      resolve()
    })
  }
}

export const getters = {}
