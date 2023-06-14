<script setup></script>

<template>
  <div class="hero-container">
    <div class="background-darkening">
      <div class="content">
        <h1>
          Watch all your favourite movies from the comfort of your home right
          here on MovieMax
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
.background-darkening {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  text-align: center;
}
.content {
  text-align: center;
  position: relative;
  top: 40%;
  font-size: 2rem;
}

.hero-container {
  background-image: url("https://www.kickassfacts.com/wp-content/uploads/2016/02/Pot-Holes.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 40rem;
}

h1 {
  color: white;
  margin-bottom: 1rem;
  font-family: Roboto;
}
</style>
