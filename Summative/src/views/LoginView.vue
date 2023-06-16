<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "@firebase/firestore";

const store = useStore();
const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");
const emailTwo = ref("");
const passwordLogin = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Passwords don't match!");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  emailTwo.value = email.value;
  passwordLogin.value = passwordOne.value;
  router.push("/purchase");
};

const loginViaEmail = async () => {
  const { user } = await signInWithEmailAndPassword(
    auth,
    emailTwo.value,
    passwordLogin.value
  );
  store.user = user;
  const cart = await getDoc(doc(firestore, "carts", user.email));

  if (cart.exists()) {
    store.cart = cart.data().cart;
  } else {
    await setDoc(doc(firestore, "carts", user.email), { cart: [] });
    store.cart = [];
  }
  router.push("/purchase");
};

const registerViaGoogle = async () => {
  const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
  store.user = user;
  const cart = await getDoc(doc(firestore, "carts", user.email));

  if (cart.exists()) {
    store.cart = cart.data().cart;
  } else {
    await setDoc(doc(firestore, "carts", user.email), { cart: [] });
    store.cart = [];
  }
  router.push("/purchase");
};
</script>

<template>
  <div class="login-page">
    <h1 class="title">Login and have fun!</h1>
    <div class="login-functions">
      <div class="google">
        <h1>Register via Google</h1>
        <button @click="registerViaGoogle()">Google</button>
      </div>
      <div class="register-email">
        <h1>Register via Email</h1>
        <form class="email-setup" @submit.prevent="registerViaEmail()">
          <input v-model="email" type="email" placeholder="Email" />
          <input
            v-model="passwordOne"
            type="password"
            placeholder="Enter Password"
          />
          <input
            v-model="passwordTwo"
            type="password"
            placeholder="Re-enter Password"
          />
          <button class="register-button" type="submit" value="Register">
            Register
          </button>
        </form>
        <div class="email-login">
          <h1>Login via Email</h1>
          <form class="login" @submit.prevent="loginViaEmail()">
            <input v-model="emailTwo" type="email" placeholder="Email" />
            <input
              v-model="passwordLogin"
              type="password"
              placeholder="Password"
            />
            <button class="login-button" type="submit" value="Login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.login-page {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://t3.ftcdn.net/jpg/03/17/79/66/360_F_317796693_B5yF8ybwUMb3MDhe6QQWGJKQYYNHfxKg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  position: absolute;
  top: 1rem;
  color: rgba(255, 255, 255, 0.716);
}

.login-functions {
  display: flex;
  gap: 5rem;
}

h1 {
  margin-bottom: 1rem;
  font-family: Roboto;
}

.google {
  border: solid white;
  background-color: rgba(255, 255, 255, 0.711);
  padding: 1rem;
  border-radius: 25px;
  height: fit-content;
  text-align: center;
  position: relative;
  top: 9rem;
}

.register-email {
  border: solid white;
  background-color: rgba(255, 255, 255, 0.711);
  padding: 1rem;
  border-radius: 25px;
  text-align: center;
}

.email-login {
  margin-top: 3rem;
}

.email-setup {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  text-align: center;
  border-radius: 10px;
  font-size: 1rem;
  height: 2rem;
  box-shadow: 5px 5px;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

button {
  width: 9rem;
  height: 4rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.register-button {
  position: relative;
  left: 3rem;
}

.login-button {
  position: relative;
  left: 3rem;
}
</style>
