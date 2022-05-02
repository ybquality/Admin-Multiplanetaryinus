<template>
    <div class="nav">
        <div class="nav-left">
            <!-- <div>
                <el-icon><fold /></el-icon>
            </div> -->
            <el-button class="nav-fold" >
                <el-icon><fold /></el-icon>
            </el-button>
            <span class="nav-left-guide">首页</span>
        </div>
        <div class="nav-right">
                <!-- <span>whh</span> -->
                <el-dropdown @command="handleDropdown">
                    <span>{{store.user.user_name}}</span>
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item command="info">个人信息</el-dropdown-item>
                        <el-dropdown-item >系统设置</el-dropdown-item>
                        <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>


                <div class="nav-avatar">
                    <el-avatar :icon="Avatar" :src="store.user.avatar"/>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from "../router";
import { UserFilled,Avatar,Fold } from "@element-plus/icons-vue";
import { useAuthStore } from "../store";

const store :any = useAuthStore();

//下拉菜单
const handleDropdown = (item:string) => {
    switch(item) {
        case "info":
            showUserInfo();
            break;
        case "logout":
            logout();
            break;
    }
};
//前往个人主页的方法
const showUserInfo = () => {
    router.push('/userinfo');
}
//退出登录方法
const logout = () => {
    alert("是否退出登录");

    localStorage.removeItem("token");
    store.setAuth(false)
    store.setUser(null)

    router.push("/login")
}
</script>

<style scoped>
.nav{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* 这个属性是flex使元素内垂直居中 */
    align-items: center;
}
.nav-left-guide{
    color: #858585;
    font-weight: 400;
    margin-left: 10px;
}
.nav-left{
    height: 100%;
    display: flex;
    align-items: center;
}
.nav-right{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-fold{
    color: #177ddc;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    height: 100%;
}
.nav-fold i {
    font-size: 24px;
}
.nav-avatar{
    margin-left: 10px;
}

.el-dropdown{
    color: #fff;
}
</style>