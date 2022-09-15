const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    port: 8081
  }
}

module.exports = defineConfig({

  transpileDependencies: true,
  lintOnSave:false
})
