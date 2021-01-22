<template>
  <div class="row">
    <Player1 />

    <RollDice />

    <Player2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Player1 from '../components/Player1'
import RollDice from '../components/Roll'
import Player2 from '../components/Player2'

export default {
  name: 'PlayArea',
  components: {
    Player1,
    Player2,
    RollDice
  },
  sockets: {
    users (payload) {
      console.log(`${payload} has been joined the game`)
      // toastr.success(this.$toastr.success('Message', 'Title', options))
      this.$toastr.success(`${payload} has  joined the game`, 'Heads up!', { timeOut: 3000, closeButton: true })
    },
    dcMSG (payload) {
      this.$toastr.error(`${payload} has left the game`, 'Oh well...', { timeOut: 3000, closeButton: true })
    }
  }
}
</script>
