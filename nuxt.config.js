import theme from "@nuxt/content-theme-docs";

export default theme({
  target: "static",
  docs: {
    primaryColor: "#03A9F4",
  },
  pwa: {
    manifest: {
      name: "Mega Dash",
      short_name: "Mega Dash",
      description:
        "Mega Dash is a programming cookbook with interactive examples and references of Flutter, Dart, Git as well as other various programming languages and tools.",
    },
  },
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://megadash.dev",
    exclude: ["/releases"],
    async routes() {
      const { $content } = require("@nuxt/content");
      const routes = await $content("en", { deep: true }).only(["to"]).fetch();
      return routes.map((route) => route.to);
    },
  },
});
