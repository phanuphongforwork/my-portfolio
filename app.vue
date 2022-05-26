<template>
  <div>
    <NuxtLayout name="hero">
      <NuxtPage
        class="bg-gradient-to-r from-gray-800 to-graybase-100 min-h-screen"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
