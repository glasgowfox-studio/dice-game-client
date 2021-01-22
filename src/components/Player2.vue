<template>
  <div class="col d-flex justify-content-center align-items-center vh-100">
    <div class="player-block">
      <!-- <h1 class="score">{{ score2 }}</h1> -->
      <div class="player-current-dice">
        <!-- <div class="title">Current</div> -->
        <h2 style="color: white">{{ playerName }}</h2>
        <div class="col-12">
          <button
            type="button"
            class="btn button-roll btn-danger"
            @click="rollTheDice2()"
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player2',
  props: ['currentDice2', 'score2'],
  data () {
    return {
      playerName: 'waiting...'
    }
  },
  methods: {
    rollTheDice2 () {
      this.$emit('rollTheDice2', {
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
