module.exports = {
  lintOnSave: true,
  chainWebpack: function (config) {
    config.module
      .rule('html')
      .test(/\.html$/)
      .exclude.add(/index\.html/).end()
      .set('loader', 'vue-template-loader')
      .end();
  }
};
