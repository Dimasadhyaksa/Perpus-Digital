// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxtjs/supabase"],
  supabase: {redirect: false},

  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
})
