<template>
  <div id="app">
    <router-view @passingName="passingName" :passingName="this.passing"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      passing: ''
    }
  },
  methods: {
    passingName (val) {
      this.passing = val
      // console.log(this.passing, '<<< INI DI APP')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
