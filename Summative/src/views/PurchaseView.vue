<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from "../components/Modal.vue";

const router = useRouter();
const genre = ref(28);
const search = ref("");
const movies = ref(null);
const page = ref(1);
const currentURL = ref("");
const totalPages = ref(0);
const showModal = ref(false);
const selectedRecordId = ref(0);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};

const getTMDBData = async (url, options, page) => {
  movies.value = (
    await axios.get(url, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        region: "US",
        language: "en",
        include_adult: false,
        page,
        ...options,
      },
    })
  ).data;
  totalPages.value = movies.value.total_pages;
  currentURL.value = url;
};
</script>

<template>
  <div class="purchase-page">
    <h1 class="title">Select your movies</h1>
    <div class="controls">
      <div class="search">
        <input
          class="search-bar"
          type="search"
          placeholder="Enter movie title"
          v-model="search"
        />
        <button
          class="search-button"
          @click="
            getTMDBData('https://api.themoviedb.org/3/search/movie', {
              query: search,
            })
          "
        >
          Search
        </button>
      </div>
      <div>
        <div class="dropdown">
          <select class="menu" v-model="genre">
            <option value="28">Action</option>
            <option value="10751">Family</option>
            <option value="878">Science Fiction</option>
            <option value="12">Adventure</option>
            <option value="14">Fantasy</option>
            <option value="10770">TV Movie</option>
            <option value="16">Animation</option>
            <option value="36">History</option>
            <option value="53">Thriller</option>
            <option value="35">Comedy</option>
            <option value="27">Horror</option>
            <option value="10752">War</option>
            <option value="80">Crime</option>
            <option value="10402">Music</option>
            <option value="37">Western</option>
            <option value="99">Documentary</option>
            <option value="9648">Mystery</option>
            <option value="18">Drama</option>
            <option value="10749">Romance</option>
          </select>
          <button
            class="get-movies"
            @click="
              getTMDBData('https://api.themoviedb.org/3/discover/movie', {
                with_genres: genre,
              })
            "
          >
            Get
          </button>
        </div>
      </div>
      <img
        class="cart"
        src="https://www.uidownload.com/files/609/434/345/cart-commerce-buy-shopping-cart-shopping-icon.png"
        @click="router.push('/cart')"
      />
    </div>

    <div v-if="movies" class="tiles">
      <div v-for="movie in movies.results" :key="movie.id" class="tile">
        <img
          class="movies"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
    <div class="page-change">
      <div class="pagination">
        <button
          class="previous-page"
          @click="
            getTMDBData(
              currentURL,
              {
                query: search,
                with_genres: genre,
              },
              page === 1 ? 1 : page--
            )
          "
        >
          Previous page
        </button>
        <p>{{ `Page ${page} of ${totalPages}` }}</p>
        <button
          class="next-page"
          @click="
            getTMDBData(
              currentURL,
              {
                with_genres: genre,
                query: search,
              },
              page >= totalPages ? totalPages : page++
            )
          "
        >
          Next page
        </button>
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.menu {
  font-size: 1.5rem;
  text-align: center;
  border-radius: 10px;
  cursor:pointer;
}

.get-movies {
  height: 2rem;
  width: 3rem;
  position: relative;
  top: -3px;
  border-radius: 10px;
  box-shadow: 2px 2px black;
  font-weight: bold;
  cursor:pointer;
}

.search-bar {
  text-align: center;
  font-size: 1.5rem;
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
}

.search-button {
  height: 3rem;
  width: 5rem;
  border-radius: 1rem;
  position: relative;
  top: -3px;
  box-shadow: 2px 2px black;
  font-weight: bold;
  cursor:pointer;
}

.purchase-page {
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
  height: 100%;
}

h1 {
  text-align: center;
  color: rgb(173, 148, 4);
  background-color: navy;
  height: 7rem;
  font-size: 3rem;
  text-decoration: underline;
}

.search {
  position: absolute;
  left: 1rem;
  top: 1rem;
}

.tiles {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.dropdown {
  text-align: center;
  margin-block: 1rem;
  position: absolute;
  top: 3.5rem;
  left: 5rem;
}

.movies {
  width: 15rem;
  margin-block: 1rem;
  border: solid white;
  cursor:pointer;
}

.pagination {
  display: flex;
  gap: 0.5rem;
  color: white;
  font-size: 1.2rem;
  position: absolute;
  top: 2rem;
  right: 8rem;
}

.previous-page {
  font-size: 1rem;
  height: 3rem;
  width: 5rem;
  border-radius: 10px;
  font-weight: bold;
  cursor:pointer;
}

.next-page {
  font-size: 1rem;
  height: 3rem;
  width: 5rem;
  border-radius: 10px;
  font-weight: bold;
  padding: 2px;
  cursor:pointer;
}

p {
  position: relative;
  top: 0.5rem;
}

.cart {
  width: 5rem;
  border: solid white;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor:pointer;
}
</style>
