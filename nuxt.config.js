import pkg from './package'
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // mode: 'universal',
  //
  // /*
  // ** Headers of the page
  // */
  // head: {
  //   title: pkg.name,
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: pkg.description }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },
  //
  // /*
  // ** Customize the progress-bar color
  // */
  // loading: { color: '#fff' },
  //
  // /*
  // ** Global CSS
  // */
  // css: [
  // ],
  //
  // /*
  // ** Plugins to load before mounting the App
  // */
  // plugins: [
  // ],
  //
  // /*
  // ** Nuxt.js modules
  // */
  modules: [
    '@nuxtjs/apollo',
    // '@nuxtjs/bulma',
    // '@nuxtjs/pwa',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000',
      }
    }
  }

  //
  // /*
  // ** Build configuration
  // */
  // build: {
  //   postcss: {
  //     preset: {
  //       features: {
  //         customProperties: false
  //       }
  //     }
  //   },
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend(config, ctx) {
  //   }
  // }
})
