module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bigfool - 大笨蛋程序员',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bigfool 大笨蛋程序员 PHP ThinkPHP Laravel JavaScript CSS Vue Nuxt.js Linux Nginx Redis Memcache MySQL 程序员 博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/font-awesome.min.css',
  ],

  plugins: [
    '@/plugins/element-ui',
    '@/plugins/main',
    { src: '@/plugins/vue-mavon-editor', srr: false },
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

