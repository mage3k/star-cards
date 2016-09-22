<template>
  <div class="card-list">
    <card v-for="repo in repos" :repo="repo"></card>
  </div>
</template>

<script>
  import card from './card.vue'
  import store from '../store'

  export default {
    computed: {
      repos () {
        return store.state.repos
      }
    },
    components: {
      card
    }
  }
</script>