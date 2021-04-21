<template>
  <Navbar />
  <div class="px-4 py-4">
    <router-view /> 
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
