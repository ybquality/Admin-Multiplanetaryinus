<template>
    <!-- 侧边栏 -->
  <el-row class="menu-container">
      <el-col class="menu-col">
          <el-menu
           class="el-menu-vertical-demo"
           active-text-color="#ffd04b"
           text-color="#fff"
           background-color="#074c62"
           default-active="1"
          >
            <!-- 首页 -->
            <el-menu-item index="1">
                <span>首页</span>
            </el-menu-item>
            <!-- 动态加载遍历 -->
            <template v-for="menu in menus" :key="menu.path">
                 <el-sub-menu v-if="menu.children" :index="menu.path">
                     <template #title>
                         <el-icon>
                             <component :is="menu.icon" ></component>
                         </el-icon>
                         <span>{{menu.name}}</span>
                     </template>
                     <el-menu-item-group>
                         <el-menu-item
                          v-for="(item,index) in menu.children"
                           :index="item.path"
                         >
                         {{item.name}}
                         </el-menu-item>
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
        icon: "",
        name: "文章管理",
        path: "article",
        children: [
            {path: "articleList",name: "新增文章"},
            {path: "articleList",name: "新增文章"},
            {path: "articleList",name: "新增文章"},
            {path: "articleList",name: "新增文章"},
            {path: "articleList",name: "新增文章"},
        ]
    },
    {
        icon: "",
        name: "测试",
        path: "test",
        children: [
            {path: "testlist",name: "新增文章"}
        ]
    }
])
</script>

<style scoped>
</style>