<script setup>
import axios from "axios";
import { useStore } from "../store";

const store = useStore();
const props = defineProps(["id"]);

const movies = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
</script>
<template>
  <Teleport to="body">
    <div class="outer-container" @click.self="$emit('toggleModal')">
      <div class="inner-container">
        <div class="information" v-if="movies">
          <img
            class="posters"
            :src="`https://image.tmdb.org/t/p/w500/${movies.poster_path}`"
          />
          <div class="data">
            <h1>{{ movies.title }}</h1>
            <h2>Release date: {{ movies.release_date }}</h2>
            <h2>{{ movies.overview }}</h2>
            <button
              class="purchase-button"
              @click="store.addToCart(movies.poster_path, movies.title)"
            >
              Purchase
            </button>
          </div>
          <button class="close" @click="$emit('toggleModal')">X</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.inner-container {
  text-align: center;
  background-color: #61839e;
  width: 60rem;
  height: 30rem;
  position: relative;
  border-radius: 25px;
  color: rgb(0, 0, 0);
  border: solid white 5px;
}

.information {
  display: flex;
  gap: 4rem;
}

.close {
  position: relative;
  bottom: 48px;
  padding: 1rem;
  border: none;
  background: #61839e;
  font-weight: bold;
  margin-top: 3rem;
  width: 9rem;
  height: 4rem;
  border-radius: 20px;
  cursor: pointer;
}

.posters {
  height: 30rem;
  border-radius: 25px;
}

.data > * {
  margin-block: 1rem;
  font-size: 20px;
}

.purchase-button {
  width: 7rem;
  height: 4rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
