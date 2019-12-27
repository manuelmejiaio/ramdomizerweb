import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    //  -------------------user
    user: {
      id: '',
      name: '',
      email: '',
      token: '',
      plan: ''
    },
    desiredPlan: '',
    //  -------------------participant
    participant: {
      entries: []
    },
    //  -------------------giveaway
    giveaway: {},
    //  -------------------snackbar
    snack: ''
  }
}
// initial state
const state = getDefaultState()

const mutations = {
  //  -------------------user
  Login(state, payload) {
    state.user.id = payload.userId
    state.user.name = payload.name
    state.user.email = payload.userEmail
    state.user.token = payload.token
    state.user.plan = payload.plan
  },
  Update(state, payload) {
    state.user.name = payload.name
  },
  SetUserPlan(state, plan) {
    state.user.plan = plan
  },
  Logout(state) {
    Object.assign(state, getDefaultState())
  },
  SetDesiredPlan(state, plan) {
    state.desiredPlan = plan
  },
  //  -------------------participant
  AddEntry(state, entry) {
    state.participant.entries.push(entry)
  },
  //  -------------------giveaway
  SetGiveaway(state, payload) {
    state.giveaway = payload.giveaway
  },
  //  -------------------snackbar
  SetSnack(state, snack) {
    state.snack = snack
  }
}

export default new Vuex.Store({
  state,
  plugins: [createPersistedState()],
  mutations
})
