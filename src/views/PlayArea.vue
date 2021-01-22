<template>
  <div class="row">
    <Player1
    @rollTheDice='rollTheDice'
    :currentDice1='currentDice1'/>

    <Player2
    @rollTheDice2='rollTheDice2'
    :currentDice2='currentDice2'/>

  </div>
</template>

<script>
// @ is an alias to /src
import Player1 from '../components/Player1'
import Player2 from '../components/Player2'

export default {
  name: 'PlayArea',
  data () {
    return {
      randomNumber1: 1,
      randomNumber2: 2,
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
      if (val.payload === this.playerName1) {
        if (!this.attemp1) {
          this.attemp1 = true
          this.randomNumber1 = Math.floor(Math.random() * 6) + 1
          switch (this.randomNumber1) {
            case 1:
              this.currentDice1 = 'https://i.imgur.com/6DwTTxc.png'
              break
            case 2:
              this.currentDice1 = 'https://i.imgur.com/g1sbMdg.png'
              break
            case 3:
              this.currentDice1 = 'https://i.imgur.com/vvpdsLv.png'
              break
            case 4:
              this.currentDice1 = 'https://i.imgur.com/Gol5vmT.png'
              break
            case 5:
              this.currentDice1 = 'https://i.imgur.com/bAC4F4P.png'
              break
            case 6:
              this.currentDice1 = 'https://i.imgur.com/E3eD8th.png'
              break
            default:
              break
          }
        }
      }
    },
    rollTheDice2 (val) {
      if (val.payload === this.playerName2) {
        if (!this.attemp2) {
          this.attemp2 = true
          this.randomNumber2 = Math.floor(Math.random() * 6) + 1
          switch (this.randomNumber2) {
            case 1:
              this.currentDice2 = 'https://i.imgur.com/6DwTTxc.png'
              break
            case 2:
              this.currentDice2 = 'https://i.imgur.com/g1sbMdg.png'
              break
            case 3:
              this.currentDice2 = 'https://i.imgur.com/vvpdsLv.png'
              break
            case 4:
              this.currentDice2 = 'https://i.imgur.com/Gol5vmT.png'
              break
            case 5:
              this.currentDice2 = 'https://i.imgur.com/bAC4F4P.png'
              break
            case 6:
              this.currentDice2 = 'https://i.imgur.com/E3eD8th.png'
              break
            default:
              break
          }
        }
      }
    },
    checkCondition () {
      if (this.attemp1 && this.attemp2) {
        alert('dua duanya sudah')
      } else {
        alert('satu belum')
      }
    }
  },
  sockets: {
    users (payload) {
      console.log(`${payload.name} has been joined the game`)
    },
    user1 (payload) {
      this.playerName1 = payload.name
    },
    user2 (payload) {
      this.playerName2 = payload.name
    }
  },
  updated () {
    this.checkCondition()
  }
}
</script>
