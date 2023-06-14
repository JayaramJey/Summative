<script setup>
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

</script>

<template>
  <div class="cart-page">
    <h1 class="page-title">Here are your movies</h1>
    <img
      class="movie-return"
      src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Black_Left_Arrow.png"
      @click="router.push('/purchase')"
    />

    <div class="cart-movies">
      <div v-for="movies in store.cart">
        
        <h1>{{ movies.title }}</h1>
        <img
          class="poster"
          :src="`https://image.tmdb.org/t/p/w500/${movies.poster}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-movies {
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
.cart-page {
  background-color: black;
  color: white;
  min-height: 66rem;
  height: 100%;
}

.cart-movies > * {
  margin: 1rem;
}
.poster {
  height: 20rem;
  border: solid white;
}

.movie-return {
  width: 8%;
  height: 4rem;
  border-radius: 25px;
  position: relative;
  bottom: 4.5rem;
  left: 1rem;
}

.page-title {
  background-color: navy;
  color: rgb(173, 148, 4);
  height: 5rem;
  text-align: center;
  font-size: 4rem;
}
</style>
