<script setup lang="ts">
import { dateZhCN } from 'naive-ui'

import { colorTheme } from '@/assets/theme'
</script>

<template>
  <n-config-provider
    class="wh-full"
    :theme-overrides="colorTheme"
    :date-locale="dateZhCN"
  >
    <router-view />
  </n-config-provider>
</template>
./assets/theme/colors
