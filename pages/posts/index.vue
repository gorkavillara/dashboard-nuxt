<template>
  <h3>{{ $t("posts.title") }}</h3>
  <ul>
    <li v-for="post in postList" :key="post">
      <NuxtLink :to="`/posts/${post}`">{{ $t("posts.post") }} {{ post }} </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
const postList = Array.from({ length: 10 })
  .fill(0)
  .map((_, index) => index + 1);
</script>
