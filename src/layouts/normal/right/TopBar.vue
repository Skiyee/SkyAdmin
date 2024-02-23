<script setup lang="ts">
const isDark = ref(false)
const collapsed = ref(false)
</script>

<template>
  <div class="h-60 flex items-center gap-12 px-12">
    <!-- 菜单折叠按钮 -->
    <div
      class="text-22 transition-all-300 icon-btn"
      @click="collapsed = !collapsed"
    >
      <i :class="collapsed ? 'i-line-md:menu-unfold-left' : 'i-line-md:menu-unfold-right'" />
    </div>

    <!-- 面包屑 -->
    <div class="flex-1">
      <BreadCrumb />
    </div>

    <!-- 工具栏 -->
    <div class="flex flex-shrink-0 items-center gap-12 text-18">
      <div
        class="icon-btn"
        @click="isDark = !isDark"
      >
        <i :class="isDark ? 'i-line-md:sunny-outline-to-moon-alt-loop-transition' : 'i-line-md:sunny-outline-loop'" />
      </div>

      <div class="icon-btn">
        <i class="i-fe:github" />
      </div>
    </div>
  </div>
</template>
