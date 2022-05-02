//状态管理
// stores/counter.js
import { defineStore } from 'pinia'
import { userType } from "../utils/types";//类型匹配

export const useAuthStore = defineStore('auth', {
  state: () => {
      //是否登录成功
    return { isAuthenticated:false,user:{} }
  },
  getters: {
    getAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
  },
  //状态修改
  actions: {
    setAuth(isAuth:boolean){
        if(isAuth){
            this.isAuthenticated = isAuth;

        }else{
            this.isAuthenticated = false;
        }
    },
    setUser(user:userType | null){
        if(user){
            this.user = user;
        }else{
            this.user = {}
        }
    }
  },
})