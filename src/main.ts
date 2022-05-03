// 控制器
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from "pinia";
import * as ElIcons from "@element-plus/icons-vue";//引入element icon图标

const app = createApp(App)

//将el图标做成全局引入
for( const name in ElIcons ){
    app.component(name,(ElIcons as any)[name])
}

app.use(createPinia())
app.use(router)
app.mount('#app')
