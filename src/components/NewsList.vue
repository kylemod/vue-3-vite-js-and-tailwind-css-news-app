<template>
  <div>
    <div v-for="article in data" :key="article.id" class="p-4 bg-gray-50 mb-4 rounded-lg">
      <img :src="article.urlToImage" class="rounded-lg w-full ">
      <p class="mt-2 text-indigo-500 font-bold">{{ article.author }}</p>
      <p class="tracking-wide text-gray-700 font-medium mt-1">{{ article.title }}</p>
      <p class="mt-2 text-gray-700 text-sm">{{ article.description }}</p>
      <a :href="article.url" target="_blank" class="inline-block mt-3 bg-indigo-500 text-white px-3 py-1.5 rounded">Read more</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
    }
  }
</script>