<template>
  <div class="row">
    <Player1 @rollTheDice="rollTheDice" :currentDice1="currentDice1" :playerName1="playerName1"/>

    <Player2 @rollTheDice2="rollTheDice2" :currentDice2="currentDice2" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Player1 from '../components/Player1'
import Player2 from '../components/Player2'

export default {
  name: 'PlayArea',
  data () {
    return {
      // randomNumber1: 1,
      randomNumber2: 1,
      // currentDice1: 'https://i.imgur.com/E3eD8th.png',
      currentDice2: 'https://i.imgur.com/E3eD8th.png',
      // attemp1: false,
      attemp2: false,
      // playerName1: '',
      playerName2: ''
    }
  },
  components: {
    Player1,
    Player2
  },
  methods: {
    rollTheDice (val) {
      if (val.payload === this.playerName1) {
        if (!this.attemp1) {
          // this.attemp1 = true
          this.$socket.emit('attemp1', { attemp: true })
          this.$store.commit('randomNumber')
          // this.randomNumber1 = Math.floor(Math.random() * 6) + 1
          this.$socket.emit('dice1', { dice: this.randomNumber1 })
          this.$store.commit('rollDice', this.randomNumber1)
        }
      }
    },
    rollTheDice2 (val) {
      if (val.payload === this.playerName2) {
        if (!this.attemp2) {
          // this.attemp2 = true
          this.$socket.emit('attemp2', { attemp: true })
          this.$store.commit('randomNumber2')
          // this.randomNumber2 = Math.floor(Math.random() * 6) + 1
          this.$socket.emit('dice2', { dice: this.randomNumber2 })
          this.$store.commit('rollDice2', this.randomNumber2)
        }
      }
    },
    checkCondition () {
      if (this.attemp1 && this.attemp2) {
        alert('dua duanya sudah')
        this.$socket.emit('attemp1', { attemp: false })
        this.$socket.emit('attemp2', { attemp: false })
      } else {
        alert('satu belum')
      }
    }
  },
  sockets: {
    users (payload) {
      console.log(`${payload} has been joined the game`)
      // toastr.success(this.$toastr.success('Message', 'Title', options))
      this.$toastr.success(`${payload} has  joined the game`, 'Heads up!', { timeOut: 3000, closeButton: true })
    },
    dcMSG (payload) {
      this.$toastr.error(`${payload} has left the game`, 'Oh well...', { timeOut: 3000, closeButton: true })
    },
    user1 (payload) {
      // this.playerName1 = payload.name
      this.$store.commit('playerName1', payload.name)
    },
    user2 (payload) {
      // this.playerName2 = payload.name
      this.$store.commit('playerName2', payload.name)
    },
    dice1Out (payload) {
      this.randomNumber1 = payload.dice
    },
    dice2Out (payload) {
      this.randomNumber2 = payload.dice
    },
    attemp1Out (payload) {
      console.log(payload)
      this.attemp1 = payload.attemp
    },
    attemp2Out (payload) {
      console.log(payload)
      this.attemp2 = payload.attemp
    }
  },
  updated () {
    this.checkCondition()
  },
  computed: {
    ...mapState([
      'currentDice1',
      'attemp1',
      'randomNumber1',
      'playerName1',
      'currentDice2',
      'attemp2',
      'randomNumber2',
      'playerName2'
    ])
  }
}
</script>
