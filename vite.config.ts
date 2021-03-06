import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//ElementPlus自动导入方法
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //ElementPlus自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
    //跨域
    server: {
      proxy: {
        "/users":"http://localhost:8000",
        "/av":"http://localhost:8000"
      }
    }
})
