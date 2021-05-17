const isProd = () => process.env.NODE_ENV == "production"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'laetis-diner',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Poppins:wght@600&display=swap' },
    ]
  },

  ssr: false,
  serverMiddleware: isProd() ? ['redirect-ssl'] : undefined,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'eva-icons/style/eva-icons.css', lang: 'css' }  
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  apollo: {
      clientConfigs: {
         default: {
            httpEndpoint: process.env.API,
         }
      },
   },

   manifest: {
    display: 'fullscreen',
    theme_color: '#F0F0F3',
  },
}
