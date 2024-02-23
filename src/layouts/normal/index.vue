<script setup lang="ts">
import SideBar from './left/SideBar.vue'
import Content from './right/Content.vue'
import TopBar from './right/TopBar.vue'
</script>

<template>
  <div class="wh-full flex">
    <!-- 左侧区 -->
    <aside class="w-220 flex flex-shrink-0 flex-col border-r transition-width-300">
      <SideBar class="flex-1" />
    </aside>

    <!-- 右侧区 -->
    <article class="w-0 flex-1 flex-col">
      <TopBar class="border-b" />
      <Content>
        <slot />
      </Content>
    </article>
  </div>
</template>
