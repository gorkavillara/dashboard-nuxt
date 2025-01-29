<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Usuario" required />
      <input
        type="password"
        v-model="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">{{ $t("login") }}</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "~/store/useAuthStore";

const username = ref("");
const password = ref("");
const login = () => {
  // aquí hacemos la lógica
  const authLogin = useAuthStore().login;

  authLogin({ username: username.value, email: "", id: 0 });
  return navigateTo("/users");
};
</script>
