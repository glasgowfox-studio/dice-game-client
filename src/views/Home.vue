<template>
  <div class="row">
    <InsertName />
  </div>
</template>

<script>
// @ is an alias to /src

import InsertName from '../components/InsertName'

export default {
  name: 'Home',
  components: {

    InsertName
  }
}