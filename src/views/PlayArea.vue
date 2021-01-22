<template>
  <div class="row">
    <Player1
      @rollTheDice="rollTheDice"
      :currentDice1="currentDice1"
      :score1="score1"
    />
    <img
      class="img1"
      style="width: 10%; height: 10%; align-self: center"
      :src="currentDice1"
    />
    <img
      class="img1"
      style="width: 10%; height: 10%; align-self: center"
      :src="currentDice2"
    />
    <Player2
      @rollTheDice2="rollTheDice2"
      :currentDice2="currentDice2"
      :score2="score2"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Player1 from '../components/Player1'
import Player2 from '../components/Player2'

export default {
  name: 'PlayArea',
  props: ['passing'],
  data () {
    return {
      score1: 0,
      score2: 0,
      randomNumber1: 1,
      randomNumber2: 1,
      currentDice1: 'https://i.imgur.com/E3eD8th.png',
      currentDice2: 'https://i.imgur.com/E3eD8th.png',
      attemp1: false,
      attemp2: false,
      playerName1: '',
      playerName2: ''
    }
  },
  components: {
    Player1,
    Player2
  },
  methods: {
    rollTheDice (val) {
      if (val.payload !== this.playerName1) {
        console.log(this.$props)
      } else {
        if (!this.attemp1) {
          // this.attemp1 = true
          this.$toastr.success('Opponent turn', 'Announcer', { timeOut: 3000, closeButton: true })
          this.$socket.emit('attemp1', { attemp1: true })
          this.randomNumber1 = Math.floor(Math.random() * 6) + 1
          this.$socket.emit('dice1', { dice: this.randomNumber1 })
          switch (this.randomNumber1) {
            case 1:
              this.currentDice1 = 'https://i.imgur.com/6DwTTxc.png'
              this.$socket.emit('currentDice1Server', { dice1Image: 'https://i.imgur.com/6DwTTxc.png' })
              console.log('bypass')
              break
            case 2:
              this.currentDice1 = 'https://i.imgur.com/g1sbMdg.png'
              this.$socket.emit('currentDice1Server', { dice1Image: 'https://i.imgur.com/g1sbMdg.png' })
              break
            case 3:
              this.currentDice1 = 'https://i.imgur.com/vvpdsLv.png'
              this.$socket.emit('currentDice1Server', { dice1Image: 'https://i.imgur.com/vvpdsLv.png' })
              break
            case 4:
              this.currentDice1 = 'https://i.imgur.com/Gol5vmT.png'
              this.$socket.emit('currentDice1Server', { dice1Image: 'https://i.imgur.com/Gol5vmT.png' })
              break
            case 5:
              this.currentDice1 = 'https://i.imgur.com/bAC4F4P.png'
              this.$socket.emit('currentDice1Server', { dice1Image: 'https://i.imgur.com/bAC4F4P.png' })
              break
            case 6:
              this.currentDice1 = 'https://i.imgur.com/E3eD8th.png'
              this.$socket.emit('currentDice1Server', { dice1Image: 'https://i.imgur.com/E3eD8th.png' })
              break
            default:
              break
          }
        }
      }
    },
    rollTheDice2 (val) {
      console.log(val)
      console.log(this.playerName2, '<<<< ROLDEDICE')
      if (val.payload !== this.playerName2) {
        console.log('NO ACCESS')
      } else {
        if (!this.attemp2) {
          // this.attemp2 = true
          this.$toastr.success('Opponent turn', 'Announcer', { timeOut: 3000, closeButton: true })
          this.$socket.emit('attemp2', { attemp2: true })
          this.randomNumber2 = Math.floor(Math.random() * 6) + 1
          this.$socket.emit('dice2', { dice: this.randomNumber2 })
          switch (this.randomNumber2) {
            case 1:
              this.currentDice2 = 'https://i.imgur.com/6DwTTxc.png'
              this.$socket.emit('currentDice2Server', { dice2Image: 'https://i.imgur.com/6DwTTxc.png' })
              break
            case 2:
              this.currentDice2 = 'https://i.imgur.com/g1sbMdg.png'
              this.$socket.emit('currentDice2Server', { dice2Image: 'https://i.imgur.com/g1sbMdg.png' })
              break
            case 3:
              this.currentDice2 = 'https://i.imgur.com/vvpdsLv.png'
              this.$socket.emit('currentDice2Server', { dice2Image: 'https://i.imgur.com/vvpdsLv.png' })
              break
            case 4:
              this.currentDice2 = 'https://i.imgur.com/Gol5vmT.png'
              this.$socket.emit('currentDice2Server', { dice2Image: 'https://i.imgur.com/Gol5vmT.png' })
              break
            case 5:
              this.currentDice2 = 'https://i.imgur.com/bAC4F4P.png'
              this.$socket.emit('currentDice2Server', { dice2Image: 'https://i.imgur.com/bAC4F4P.png' })
              break
            case 6:
              this.currentDice2 = 'https://i.imgur.com/E3eD8th.png'
              this.$socket.emit('currentDice2Server', { dice2Image: 'https://i.imgur.com/E3eD8th.png' })
              break
            default:
              break
          }
        }
      }
    },
    checkCondition () {
      if (this.attemp1 && this.attemp2) {
        if (this.randomNumber1 === this.randomNumber2) {
          // this.condition = "draw"
          this.$toastr.success('Draw', 'Announcer', { timeOut: 3000, closeButton: true })
        } else if (this.randomNumber1 < this.randomNumber2) {
          // this.condition = this.player2 + " wins!"
          this.score2 += 1
          this.$toastr.success(`${this.playerName2} wins!`, 'Announcer', { timeOut: 3000, closeButton: true })
        } else if (this.randomNumber1 > this.randomNumber2) {
          this.$toastr.success(`${this.playerName1} wins!`, 'Announcer', { timeOut: 3000, closeButton: true })
          // this.condition = this.player1 + " wins!"
          this.score1 += 1
        }

        this.$socket.emit('attemp1', { attemp1: false })
        this.$socket.emit('attemp2', { attemp2: false })
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
      this.playerName1 = payload.name
    },
    user2 (payload) {
      this.playerName2 = payload.name
    },
    dice1Out (payload) {
      this.randomNumber1 = payload.dice
    },
    dice2Out (payload) {
      this.randomNumber2 = payload.dice
    },
    attemp1Out (payload) {
      console.log(payload)
      this.attemp1 = payload.attemp1
    },
    attemp2Out (payload) {
      console.log(payload)
      this.attemp2 = payload.attemp2
    },
    currentDice1ServerOut (payload) {
      console.log(payload)
      this.currentDice1 = payload.dice1Image
    },
    currentDice2ServerOut (payload) {
      console.log(payload)
      this.currentDice2 = payload.dice2Image
    }
  },
  updated () {
    this.checkCondition()
  }
}
</script>
