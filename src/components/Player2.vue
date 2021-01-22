<template>
  <div class="col d-flex justify-content-center align-items-center vh-100">
    <div class="player-block">
      <h2>{{ playerName }}</h2>
      <h1 class="score">0</h1>
      <div class="player-current-dice">
        <div class="title">Current</div>
        <img class="img1" :src="currentDice2" />
        <div class="col-12">
        <button type="button" class="btn button-roll btn-danger" @click="rollTheDice2()">
          Roll
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player1',
  props: ['currentDice2'],
  data () {
    return {
      playerName: 'waiting...'
    }
  },
  methods: {
    rollTheDice2 () {
      this.$emit('rollTheDice', {
        payload: this.playerName
      })
    }
  },
  sockets: {
    user2 (payload) {
      this.playerName = payload.name
    },
    dcMSG (payload) {
      if (this.playerName === payload) this.playerName = 'waiting...'
    }
  }
}
</script>
