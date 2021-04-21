<template>
  <div class="bg-red-50 p-4 text-center">
    <p class="text-red-500">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: String
  }
}
</script>