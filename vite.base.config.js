import { defineConfig } from "vite"
const postcssPresetEnv = require("postcss-preset-env")
const path = require("path")
export default defineConfig({
  optimizeDeps: {
    exclude: [] //将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: "ENV_", //配置vite注入客户端环境变量校验的env前缀
  css: { // 对css的行为进行配置
    modules: { // 是对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式（驼峰还是中划线）
      // 配置当前的模块化行为是模块化还是全局化（有hash就是开启了模块化的标志，可以保证产生不同的hash值来控制我们的样式类名不被覆盖）
      scopeBehaviour: "local",
      // generateScopedName: "[name]_[local]_[hash:5]",
      generateScopedName: (name, filename, css) => {
        // name->代表css文件类名
        // filename->代表css文件的绝对路径
        // css->当前样式
        console.log(name, filename, css);
        return `${name}_${Math.random().toString(36).substr(3, 8)}`
      },
      hashPrefix: "hello",//加入到hash的生成中
      globalModulePaths: ["./componentB.module.css"], //代表不想参与到css模块化的路径
    },
    preprocessorOptions: { // 主要用来配置css预处理的全局参数
      less: {// 整个的配置对象都会最终给到less的执行参数中去
        math: "always",
        globalVars: { //全局变量
          mainColor: "red"
        }
      }

    },
    devSourcemap: true,//开启css的sourceMap（文件索引）
    postcss: { //优先级高
      plugins: [postcssPresetEnv({
        importFrom: path.resolve(__dirname, "./variable.css")
      })]
    }
  }
})