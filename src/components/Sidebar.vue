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
            <!-- 首页 -->
            <router-link to="/">
                <el-menu-item index="1">
                <el-icon><grid /></el-icon>
                <span>首页</span>
                </el-menu-item>
            </router-link>
            <!-- 动态加载遍历 -->
            <!-- 根据menu下面的path进行数据遍历 -->
            <template v-for="menu in menus" :key="menu.path">
                 <el-sub-menu v-if="menu.children" :index="menu.path">
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
            </template>
            <!-- 文章管理 -->
            <!-- <el-sub-menu index="2">
                <template #title>
                    <span>文章管理</span>
                </template> -->
                <!-- 文章管理下拉菜单 -->
                <!-- <el-menu-item-group>
                    <el-menu-item index="1-1">文章列表</el-menu-item>
                    <el-menu-item index="1-2">新增文章</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu> -->
          </el-menu>
      </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {ref} from "vue";

const menus = ref([
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
        children: [
            {path: "testlist",name: "测试"}
        ]
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
}
</style>