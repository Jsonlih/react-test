export default {
  disableCSSModules: true,
  env: {
    development: {
      proxy: {
        "/api": {
          target: "http://localhost:9527",
          changeOrigin: true,
          pathRewrite: {"^/api": ""}
        }
      },
    }
  }
}
