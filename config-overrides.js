// 项目自定义运行设置
const {
  override,
  overrideDevServer,
  addLessLoader,
  addWebpackAlias,
  addPostcssPlugins,
  fixBabelImports,
  addBundleVisualizer,
} = require("customize-cra");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const path = require("path");
// 打包配置
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === "production") {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    // config.output.path = `${__dirname}../dist/`;
    config.output.publicPath = "./";
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      })
    );
  }
  return config;
};
// 跨域配置
const devServerConfig = () => (config) => ({
  ...config,
  // 服务开启gzip
  compress: true,
  // 代理服务
  proxy: {
    [process.env.REACT_APP_BASE_API]: {
      target: process.env.REACT_APP_HOST,
      changeOrigin: true,
      pathRewrite: {
        ["^" + process.env.REACT_APP_BASE_API]: "",
      },
    },
  },
});
module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      style: "css",
    }),
    // 包分析
    addBundleVisualizer({}, true), // webpack-bundle-analyzer
    addLessLoader({
      strictMath: true,
      noIeCompat: true,
      loader: "css-loader",
      modifyVars: { "@primary-color": "#FEDA04" },
      options: {
        modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]",
        },
        sourceMap: true,
      },
    }),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@middleware": path.resolve(__dirname, "src/middleware"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@comp": path.resolve(__dirname, "src/components"),
      "@service": path.resolve(__dirname, "src/service"),
      "@plug": path.resolve(__dirname, "src/plugins"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store"),
      "@router": path.resolve(__dirname, "src/router"),
    }),
    addPostcssPlugins([
      require("postcss-pxtorem")({
        rootValue: 16,
        propList: ["*"],
        minPixelValue: 2,
        selectorBlackList: ["am-", "layout"],
      }),
    ]),
    addCustomize()
  ),
  devServer: overrideDevServer(devServerConfig()),
};
