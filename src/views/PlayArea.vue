<template>
  <div class="row">
    <Player1 />

    <Roll />

    <Player2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Player1 from '../components/Player1'
import Roll from '../components/Roll'
import Player2 from '../components/Player2'

export default {
  name: 'PlayArea',
  components: {
    Player1,
    Player2,
    Roll
  },
  sockets: {
    users (payload) {
      console.log(`${payload.name} has been joined the game`)
    }
  }
}
</script>
