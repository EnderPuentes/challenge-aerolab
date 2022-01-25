require("dotenv").config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      const titleDefault = "Ezshop";
      return titleChunk ? `${titleChunk} - ${titleDefault}` : titleDefault;
    },
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Router

  router: {
    extendRoutes(routes, resolve) {
      const newRoutes = routes.filter(
        (route) => route.path.indexOf("partials") === -1
      );
      routes.splice(0, routes.length, ...newRoutes);
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios.js" },
    { src: "~/plugins/vue-mixin-common-methods.js" },
    { src: "~/plugins/vuex-persistedstate", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/eslint-module",
      {
        fix: true,
      },
    ],
    [
      "@nuxtjs/style-resources",
      {
        scss: "~/assets/scss/main.scss",
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/axios",
      {
        prefix: "/api",
        proxy: true,
        debug: process.env.NODE_ENV === "production" ? false : true,
      },
    ],
    [
      "@nuxtjs/dotenv",
      {
        /* module options */
      },
    ],
  ],

  serverMiddleware: [
    {
      path: "/api",
      handler: "~/api/index.js",
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: process.env.NODE_ENV === "production" ? false : true,
    cache: true,
    optimization: {
      splitChunks: {
        chunks: 'async',
      },
    },
    babel: {
      compact: true,
     },
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: true
    },
  },
  /*
   ** Render configuration
   ** See https://nuxtjs.org/api/configuration-render/
   */
  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter((f) => f.asType === "script" && f.file === "runtime.js")
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
    asyncScripts: true,
  },
};
