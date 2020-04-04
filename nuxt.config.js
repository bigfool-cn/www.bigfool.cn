module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bigfool - 大笨蛋程序员',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bigfool-大笨蛋程序员,一个PHP从业者记录学习过程所遇技术点的博客站点，并将所学技术应用到Bigfool博客站点，技术点囊括：PHP php ThinkPHP thinkphp Laravel laravel JavaScript javascript CSS css Vue vue Nuxt.js nuxt.js Linux linux Nginx nginx Redis redis Memcache memcache MySQL mysql Docker ocker等等' }
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
    'codemirror/lib/codemirror.css',
    // merge css
    'codemirror/addon/merge/merge.css',
    // theme css
    'codemirror/theme/base16-dark.css',
  ],

  plugins: [
    '@/plugins/element-ui',
    '@/plugins/main',
    { src: '@/plugins/vue-mavon-editor', srr: false },
    { src: '@/plugins/code-mirror.js', ssr: false },
    { src: '@/plugins/xml.js', ssr: false },
    { src: '@/plugins/json.js', ssr: false },
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

