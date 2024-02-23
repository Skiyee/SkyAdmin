<script setup lang="ts">
const breadItems = [
  {
    name: '首页',
    icon: 'i-fe:home',
    code: 'home',
  },
  {
    name: '基础功能',
    icon: 'i-fe:feed',
    code: 'base',
  },
]
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="item of breadItems"
      :key="item.code"
      :clickable="false"
    >
      <div class="flex items-center">
        <i :class="item.icon" class="mr-8" />
        {{ item.name }}
      </div>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
