<script lang="ts" setup>
const { theme } = useTheme()
useLanguage()
</script>
<template>
  <van-config-provider :theme="theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </van-config-provider>
</template>
