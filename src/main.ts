// 控制器
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App)

//将el图标做成全局引入
import { CopyDocument,Coin,User,Grid } from "@element-plus/icons-vue";
const icons = {
    "CopyDocument":CopyDocument,
    "Coin":Coin,
    "User":User,
    "Grid":Grid
}
for (const [key,value] of Object.entries(icons)) {
    app.component(key,value)
}



app.use(createPinia())
app.use(router)
app.mount('#app')
