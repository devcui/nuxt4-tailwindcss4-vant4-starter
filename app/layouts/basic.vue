<script lang="ts" setup>

const items = [
  { name: 'home', icon: 'home-o', label: '首页', route: '/home' },
  { name: 'learning-center', label: '学习中心', iconify: 'material-symbols:menu-book-outline', route: '/learning-center' },
  { name: 'purchased', icon: 'bag-o', label: '我的已购', route: '/purchased' },
  { name: 'profile', icon: 'user-o', label: '我的', route: '/profile' },
]

</script>

<template>
  <div class="min-h-screen">
    <main class="pb-[var(--van-tabbar-height)]">
      <NuxtPage />
    </main>
    <van-tabbar :route="true">
      <van-tabbar-item v-for="item in items" :key="item.name" :to="item.route">
        <span>{{ item.label }}</span>
        <template #icon>
          <van-icon v-if="item.icon" :name="item.icon" />
          <Icon v-else-if="item.iconify" :name="item.iconify" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
