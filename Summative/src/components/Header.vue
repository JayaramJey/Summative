<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header">
    <img class="logo" src="../logo/Logo.png" />
    <button class="login-page" @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  height: 9rem;
  color: white;
  background-color: rgb(15, 14, 14);
  font-size: 2rem;
}

.logo {
  margin-left: 25%;
  text-align: center;
  height: 100%;
}

.login-page {
  width: 10%;
  height: 60%;
  border-radius: 25px;
  margin-left: 15%;
  position: relative;
  left: 13rem;
  top: 1rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>
