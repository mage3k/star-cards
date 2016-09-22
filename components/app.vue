<template>
  <!-- <form @submit.prevent="getUserStars" v-if="!repos.length">
    <input type="text" name="username" v-model="username" placeholder="Type your github username">
  </form>
   -->
  <header>
    <search-form></search-form>
  </header>
  <nav></nav>
  <section><card-list></card-list></section>
</template>

<script>
  import cardList from './card-list.vue'
  import searchForm from './search-form.vue'
  import store from '../store'

  export default {
    replace: false,
    el: '#app',
    data () {
      return {
        username: 'mage3k',
        repos: [],
        link: null
      }
    },
    computed: {
      reposCache () {
        return store.state.reposCache
      }
    },
    ready () {
      this.init()
    },
    methods: {
      init () {
        this.fetchUserStars(function(resp, status, xhr) {
          this.link = this.parseLinkHeader(xhr.getResponseHeader('Link'))
          // this.total =
        })
      },
      fetchUserStars (callback) {
        this.$http.get(`https://api.github.com/users/${this.username}/starred`, callback.bind(this))
      }
      // getUserStars () {
      //   this.$http.get(`https://api.github.com/users/${this.username}/starred`, (resp, status, xhr) => {
      //     this.link = this.parseLinkHeader(xhr.getResponseHeader('Link'))
      //     this.repos = resp
      //     this.addListener()
      //   })
      // },
      // searchUserStars () {
      //   this.$http.get(`https://api.github.com/users/${this.username}/starred`, (resp, status, xhr) => {
      //     this.link = this.parseLinkHeader(xhr.getResponseHeader('Link'))
      //     this.repos = resp
      //     this.addListener()
      //   })
      // },
      // checkPosition () {
      //   let docuemntHeight = document.documentElement.getBoundingClientRect().height
      //   if (window.scrollY + window.innerHeight >  docuemntHeight * 0.7) {
      //     if (!this.link.next) return
      //     this.removeListener()
      //     this.$http.get(this.link.next, (resp, status, xhr) => {
      //       this.link = this.parseLinkHeader(xhr.getResponseHeader('Link'))
      //       this.repos = this.repos.concat(resp)
      //       this.addListener()
      //     })
      //   }
      // },
      // addListener () {
      //   window.addEventListener('scroll', this.checkPosition)
      // },
      // removeListener () {
      //   window.removeEventListener('scroll', this.checkPosition)
      // }
     },
    components: {
      'card-list': cardList,
      'search-form': searchForm
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
  }
  body, ul {
    margin: 0;
    padding: 0;
  }
  nav {
    height: calc(100%);
    position: fixed;
    top: 0;
    width: 220px;
    border-right: 1px solid #ddd;
  }
  header {
    margin-left: 220px;
    width: calc(100% - 220px);
    height: 80px;
    border-bottom: 1px solid #ddd;
  }
  form {
    width: 280px;
    margin: 0 auto;
  }
  form input {
    width: 100%;
    padding: 7px 8px;
    font-size: 13px;
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    outline: none;
  }
  form input:focus {
    border-color: #aaa;
  }
  .card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
  }
</style>