<template>
  <div class="container-fluid justify-content-center">
    <div class="row" style="height: 100vh">
      <div class="col align-self-center">
        <div>
          <h1>Enter you name!</h1>
          <form @submit.prevent="login" action="">
            <br />
            <input
              type="text"
              class="form-control w-50 text-center"
              style="margin: auto"
              id="name"
              v-model="name"
              autocomplete="off"
              placeholder="Dewa Judi"
              required
            />
            <br />
            <button type="submit" class="btn btn-primary">LET'S GO</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsertName',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      this.$socket.emit('newUser', { name: this.name })
      this.$router.push({ name: 'PlayArea' })
      this.$emit('passingName', this.name)
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
    }
  }
}
</script>
