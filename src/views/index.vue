// 首页
<template>
    <div class="index">
        <div class="main">
            WELCOME: {{store.user.user_name}}
        </div>
        <div class="tolist">
            TOLIST  占位符
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../store";

const store :any = useAuthStore();

</script>

<style scoped>
.index{
    display: flex;
    justify-content: space-between;
    height: 592px;
}
.tolist{
    height: 400px;
    width: 300px;
    border: dashed 1px;
    background-color: #ffff;
}
</style>