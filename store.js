import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'v-starred'

const localStorageMiddleware = {
  onMutation (mutation, { reposCache }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reposCache))
  }
}

export default new Vuex.Store({
  state: {
    searchKeyword: '',
    reposCache: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions: {
    search: 'SEARCH'
  },
  mutations: {
    SEARCH (state, keyword) {
      console.log(keyword)
      state.searchKeyword = keyword
    }
  },
  middlewares: [localStorageMiddleware]
})