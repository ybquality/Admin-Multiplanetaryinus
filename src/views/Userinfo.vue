<template>
  <div class="userinfo">
      <div class="userinfo-title"></div>
      <div class="userinfo-body">
          <!-- 左侧信息 -->
          <div class="userinfo-left">
              <div class="userinfo-form-group">
                  <span>Name</span>
                  <input :placeholder="store.user.user_name"/>
                  <button>提交</button>
              </div>
          </div>
          <!-- 右侧头像 -->
          <div class="userinfo-right">
              头像占位符
              {{store.user.is_admin == true ? "管理员" : "普通用户"}}
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../store";

const store :any = useAuthStore();


</script>

<style scoped>
.userinfo-body{
    display: flex;
}
.userinfo-left{
    width: 66%;
    background-color: #fff;
    padding-right: 16px !important;
    padding-left: 16px !important;
}
.userinfo-right{
    width: 33%;
    background-color: #fff;
    padding-right: 16px !important;
    padding-left: 16px !important;
}
</style>