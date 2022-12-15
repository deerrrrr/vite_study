import { defineConfig } from "vite"
export default defineConfig({
  optimizeDeps: {
    exclude: [] //将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: "ENV_", //配置vite注入客户端环境变量校验的env前缀
})