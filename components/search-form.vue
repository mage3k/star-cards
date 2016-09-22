<template>
  <form @submit.prevent="submit">
    <input type="search" v-model="keyword">
  </form>
</template>

<script>
  import store from '../store'

  export default {
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      submit () {
        store.actions.search(this.keyword)
      }
    }
  }
</script>