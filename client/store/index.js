//  state should use return like on component
export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtServerInit({ dispatch }) {
    return new Promise((resolve, reject) => {
      dispatch('users/auth')
        .then(res => resolve(true))
        .catch(err => reject(err))
    })
  }
}

export const getters = {}
