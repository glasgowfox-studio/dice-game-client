import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomNumber1: 1,
    randomNumber2: 1,
    currentDice1: 'https://i.imgur.com/E3eD8th.png',
    currentDice2: 'https://i.imgur.com/E3eD8th.png',
    attemp1: false,
    attemp2: false,
    playerName1: '',
    playerName2: ''
  },
  mutations: {
    randomNumber (state) {
      state.randomNumber1 = Math.floor(Math.random() * 6) + 1
    },
    randomNumber2 (state) {
      state.randomNumber2 = Math.floor(Math.random() * 6) + 1
    },
    rollDice (state, payload) {
      switch (payload) {
        case 1:
          state.currentDice1 = 'https://i.imgur.com/6DwTTxc.png'
          break
        case 2:
          state.currentDice1 = 'https://i.imgur.com/g1sbMdg.png'
          break
        case 3:
          state.currentDice1 = 'https://i.imgur.com/vvpdsLv.png'
          break
        case 4:
          state.currentDice1 = 'https://i.imgur.com/Gol5vmT.png'
          break
        case 5:
          state.currentDice1 = 'https://i.imgur.com/bAC4F4P.png'
          break
        case 6:
          state.currentDice1 = 'https://i.imgur.com/E3eD8th.png'
          break
        default:
          break
      }
    },
    rollDice2 (state, payload) {
      switch (payload) {
        case 1:
          state.currentDice2 = 'https://i.imgur.com/6DwTTxc.png'
          break
        case 2:
          state.currentDice2 = 'https://i.imgur.com/g1sbMdg.png'
          break
        case 3:
          state.currentDice2 = 'https://i.imgur.com/vvpdsLv.png'
          break
        case 4:
          state.currentDice2 = 'https://i.imgur.com/Gol5vmT.png'
          break
        case 5:
          state.currentDice2 = 'https://i.imgur.com/bAC4F4P.png'
          break
        case 6:
          state.currentDice2 = 'https://i.imgur.com/E3eD8th.png'
          break
        default:
          break
      }
    },
    playerName1 (state, payload) {
      state.playerName1 = payload
    },
    playerName2 (state, payload) {
      state.playerName2 = payload
    }
  },
  actions: {
  }
})
