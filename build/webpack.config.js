const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//使用node的模块
module.exports = {
  //这就是我们项目编译的入口文件
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", "tsx", ".js"],
  },
  //这里可以配置一些对指定文件的处理
  //这里匹配后缀为ts或者tsx的文件
  //使用exclude来排除一些文件
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // source-map 能够追踪到报错来自于哪个源文件 而不是打包好的 bundle.js 文件
  // source-map 的配置 inline-source-map 只能用于开发环境 切勿用于生产环境
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    //这个本地开发环境运行时是基于哪个文件夹作为根目录
    // static: "./dist",
    static: {
      // 与上面的这种写法等价
      directory: path.join(__dirname, "dist"),
    },
  },
  //这里就是一些插件
  plugins: [new HtmlWebpackPlugin()],
};
