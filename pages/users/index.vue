<template>
    <h1>Bienvenido a la página de Usuarios</h1>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.id }}. {{ user.username }}
        </li>
    </ul>
</template>
<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore';

const users = useUserStore().users
</script>