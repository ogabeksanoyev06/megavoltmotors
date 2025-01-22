import { i18n } from "./locales";
export default {
  head: {
    title: "megavoltmotors",
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
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
  css: ["@/assets/styles/main.scss"],
  plugins: [
    {
      src: "./plugins/click-outside.js",
    },
    { src: "./plugins/aos.js", mode: "client", ssr: false },
    { src: "~/plugins/swiper.js" },
    { src: "~/plugins/vee-validate", mode: "client", defer: true },
    { src: "~/plugins/vue-snotify", mode: "client", defer: true },
    { src: "~/plugins/other-libraries", mode: "client", defer: true },
    { src: "~/plugins/axios.js" },
    { src: "~/plugins/v-mask.js" },
    { src: "~/plugins/v-moment.js" },
    { src: "~/plugins/locale-key.js" },
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],
  i18n: i18n,
};
