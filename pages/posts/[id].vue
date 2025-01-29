<template>
  <h4>Publicación {{ route.params.id }}</h4>
</template>
<script setup lang="ts">
// Definir un middleware que me "obligue" a tener un parámetro route.params.id
// Si no, que me redirija a /posts
const route = useRoute();
</script>
