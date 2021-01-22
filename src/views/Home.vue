<template>
  <div class="row">
    <InsertName @passingName="passingName" />
  </div>
</template>

<script>
import InsertName from '../components/InsertName'

export default {
  name: 'Home',
  components: {
    InsertName
  },
  methods: {
    passingName (val) {
      this.$emit('passingName', val)
    }
  }
}
</script>
