import Vue from 'vue'
import VueResource from 'vue-resource'
import * as filters from './filters'
import app from './components/app.vue'

Vue.use(VueResource)

Object.keys(filters).forEach(
  k => Vue.filter(k, filters[k])
)

Vue.mixin({
  methods: {
    parseLinkHeader (header) {
      let link = {}
      header.split(',').forEach( item => {
        let section = item.split(';')
        let url = section[0].replace(/<(.*)>/, '$1').trim()
        let name = section[1].replace(/rel="(.*)"/, '$1').trim()
        link[name] = url
      })
      return link
    }
  }
})

Vue.config.debug = true

new Vue(app)