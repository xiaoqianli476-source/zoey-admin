<script setup lang="ts">
import { useRouter } from 'vue-router'

// 获取路由实例
const router = useRouter()
// 定义登录函数
const login = () => {
  router.push('/login') // 跳转到 login 页面（确保路由中配置了 /login）
}

</script>

<template>
    <router-view />
</template>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
