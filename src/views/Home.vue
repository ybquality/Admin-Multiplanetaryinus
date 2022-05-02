// 首页
<template>
    <div class="common-layout">
    <el-container>
      <!-- 侧边栏 -->
      <!-- <el-aside width="150px"></el-aside> -->
      <Sidebar class="el-aside" style="width:200px;"></Sidebar>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <Navbar></Navbar>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import axios from "../utils/http";
// import Navbar from "../components/Navbar.vue";


onMounted(async () => {
    try {
        const data = await axios.get("/users/current");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})
</script>

<style>
body{
  background-color: #f1f6fe;
}
/* 头部导航栏 */
.el-header{
  height: 50px;
  /* position: fixed;
  z-index: 1; */
  background-color: #ffff;
  color: #ffffffd9;
}

/* 侧边导航栏 */
.el-aside{
  background-color: #24292f;
  /* margin: 0;
  padding: 0; */
}
.el-col ul{
  border: none;
}
/* 隐藏侧边栏下拉菜单子集标题 */
.el-menu-item-group__title{
    display: none !important;
}
</style>