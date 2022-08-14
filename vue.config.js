const { defineConfig } = require("@vue/cli-service");
const Components = require("unplugin-vue-components/webpack");
const { InklineResolver } = require("unplugin-vue-components/resolvers");
// const Equal = require('equal-vue/src/components')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({}),
      Components({
        resolvers: [InklineResolver()],
      }),
    ],
  },
});
