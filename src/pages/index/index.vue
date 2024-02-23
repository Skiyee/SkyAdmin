<script setup lang="ts">
const layouts = new Map()

function getLayout(name: string) {
  if (layouts.has(name))
    return layouts.get(name)

  const layout = markRaw(defineAsyncComponent(() => import(`../../layouts/${name}/index.vue`)))
  layouts.set(name, layout)
  return layout
}

const Layout = getLayout('normal')
</script>

<template>
  <router-view v-if="Layout" v-slot="{ Component, route: curRoute }">
    <component :is="Layout">
      <component :is="Component" :key="curRoute.fullPath" />
    </component>
  </router-view>
</template>
