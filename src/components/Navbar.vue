<template>
  <div class="px-4 py-3 flex flex-wrap justify-between shadow-sm">
    <div><span class="text-indigo-400">Vue 3</span> News</div>
    <div>
      <router-link exact to='/' class="mr-4">Home</router-link>
      <router-link to="/top-headlines">Top Headlines</router-link>
    </div>
  </div>
</template>

<style>
.router-link-exact-active {
  @apply text-indigo-400 border-b-2 border-indigo-500;
}
</style>