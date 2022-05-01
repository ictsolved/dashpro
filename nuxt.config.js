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
});
