<script lang="ts" setup>
const title = 'Sky Admin'
</script>

<template>
  <!-- LOGO区 -->
  <router-link class="flex items-center" to="/">
    <img class="h-40" src="@/assets/svg/logo.svg">
    <h2 class="ml-10 max-w-140 flex-shrink-0 text-16 text-primary font-bold">
      {{ title }}
    </h2>
  </router-link>
</template>
