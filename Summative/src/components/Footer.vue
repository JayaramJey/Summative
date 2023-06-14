<script setup></script>

<template>
  <div class="footer-container">
    <h1><u>Contact us</u></h1>
    <div class="grid-container">
      <div id="twitter" class="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
          class="logo"
        />
        <h2>@MoviesandMe</h2>
      </div>
      <div class="flex">
        <img
          class="logo"
          src="https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png"
        />
        <h2>647-934-4721</h2>
      </div>
      <div class="flex">
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
        />
        <h2>MovieMax@gmail.com</h2>
      </div>
    </div>
    <h1><u>Information about us</u></h1>
    <div class="grid-container">
      <a href="">Terms and conditions</a>
      <a href="">Privacy policy</a>
      <a href="">About MovieMax</a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
.footer-container {
  text-align: center;
  color: white;
  background-color: rgb(15, 14, 14);
  font-family: Roboto;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
  align-items: center;
  text-align: center;
  background-color: rgb(15, 14, 14);
}

.flex {
  display: flex;
  gap: 1rem;
  color: white;
  justify-content: center;
  margin-block: 3rem;
}
.logo {
  width: 2rem;
}

a {
  color: white;
  font-family: Roboto;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  margin-block: 3rem;
}
</style>
