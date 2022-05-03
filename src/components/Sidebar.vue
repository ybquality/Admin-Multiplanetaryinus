<template>
    <!-- 侧边栏 -->
  <el-row class="menu-container">
      <el-col class="menu-col">
          <el-menu
           class="el-menu-vertical-demo"
           active-text-color="#177ddc"
           text-color="#fff"
           background-color="#24292f"
           default-active="1"
          >
            <template v-for="menu in menus" :key="menu.path" >
                 <el-sub-menu v-if="menu.children" :index="menu.path" >
                     <template #title>
                         <el-icon>
                             <component :is="menu.icon"></component>
                         </el-icon>
                         <span>{{menu.name}}</span>
                     </template>
                     <el-menu-item-group>
                         <router-link v-for="(item,index) in menu.children" :key="index" :to="item.path">
                             <el-menu-item :index="item.path">
                                {{item.name}}
                             </el-menu-item>
                         </router-link>
                     </el-menu-item-group>
                 </el-sub-menu>

                <router-link  :to="menu.path" v-else>
                    <el-menu-item >
                        <el-icon>
                            <component :is="menu.icon"></component>
                        </el-icon>
                        <span>{{menu.name}}</span>
                    </el-menu-item>
                </router-link>
            </template>

          </el-menu>
      </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {ref} from "vue";

const menus = ref([
    {
        icon: "Grid",
        name: "首页",
        path: "/",
    },
    {
        icon: "CopyDocument",
        name: "文章管理",
        path: "article",
        children: [
            {path: "articleList",name: "文章列表"},
            {path: "NewArticle",name: "新增文章"},
        ]
    },
    {
        icon: "Coin",
        name: "测试",
        path: "test",
    },
    {
        icon: "User",
        name: "用户管理",
        path: "user",
        children: [
            {path: "userList",name: "用户列表"},
            {path: "adminList",name: "管理员列表"},
        ]
    },
    {
        icon: "",
        name: "语言维护",
        path: "i18",
    },
    {
        icon: "",
        name: "反馈管理",
        path: "feedback",
    },
    {
        icon: "",
        name: "系统设置",
        path: "feedback",
    },
])
</script>

<style scoped>


.el-menu-item-group{
    background-color: #141414;
}
.el-sub-menu .el-menu-item{
    padding-left: 50px !important;
    /* padding-left: 20px !important; */
}
</style>