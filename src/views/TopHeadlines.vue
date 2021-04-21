<template>
  <div>
    <p class="text-center text-xl mb-4">Top Headlines in USA</p>
    
    <div v-if="error" class="m-auto md:w-1/2">
      <ErrorCard :error="error" />
    </div>
    <div v-else-if="fetching" class="m-auto md:w-1/2">
      <Loading />
    </div>
    <div v-else class="m-auto md:w-1/2">
      <NewsList :data="data.articles" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useFetch from '../composition/useFetch'
import NewsList from '../components/NewsList.vue'
import Loading from '../components/Loading.vue'
import ErrorCard from '../components/ErrorCard.vue'

export default {
  components: {
    NewsList,
    Loading,
    ErrorCard
  },
  setup() {
    const { fetchData, data, error, fetching } = useFetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=your__api__key')
    
    onMounted(async () => {
      await fetchData()
    })
  return { fetchData, data, error, fetching }
  }
}
</script>