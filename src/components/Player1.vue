<template>
  <div class="col d-flex justify-content-center align-items-center vh-100">
    <div class="player-block">
      <h2>{{ playerName }}</h2>
      <h1 class="score">0</h1>
      <div class="player-current-dice">
        <div class="title">Current</div>
        <div class="current-dice">4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player1',
  data () {
    return {
      playerName: 'Waiting...'
    }
  },
  sockets: {
    user1 (payload) {
      this.playerName = payload.name
    }
  }
}
</script>
