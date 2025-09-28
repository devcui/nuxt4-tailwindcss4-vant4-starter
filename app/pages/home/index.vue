<script lang="ts" setup>

import type { GroupProducts, Product } from '~/components/ProductCard/product-card.types';
import type { IntroUser } from '~/components/UserCard/user-card.types';

definePageMeta({
  layout: 'basic'
})

const demoPng = '/images/demo.png';
const banner = '/images/home_banner.jpg';
const homeGridI1 = '/images/home_grid_i1.png';
const homeGridI2 = '/images/home_grid_i2.png';
const homeGridI3 = '/images/home_grid_i3.png';
const homeGridI4 = '/images/home_grid_i4.png';
const homeGridI5 = '/images/home_grid_i5.png';
const product1 = '/images/product_1.webp';
const product2 = '/images/product_2.webp';
const product3 = '/images/product_3.webp';
const IntroUserAvatar = '/images/intro_user_avatar.webp';

const gridItems = [
  { icon: homeGridI1, text: 'vip系统课' },
  { icon: homeGridI2, text: '公开课' },
  { icon: homeGridI3, text: '训练营' },
  { icon: homeGridI4, text: '学员作品' },
  { icon: homeGridI5, text: '我的课程' },
];

const productsA: Product[] = [
  { image: demoPng, title: '轻基础·故事插画课', price: 1080, desc: '  实现商业落地 ', tags: ["1", "2"], visits: 200, oldPrice: 1200 },
  { image: product2, title: '17期 | 绘本插画·故事思维线上课', price: 1980, desc: ' 打造专属风格 | 实现商业落地 ', tags: ["1", "2"], visits: 200, oldPrice: 2580 },
  { image: product3, title: '17期 | 绘本插画·综合技法线上课', price: 3980, desc: ' 插画基础提升 | 拓展故事思维 | 打造专属风格 | 实现商业落地 ', tags: ["1", "2"], visits: 200, oldPrice: 4580 },
]

const groupProductsC1: GroupProducts = {
  title: '热门课程',
  columns: 1,
  priceSameLine: true,
  showTag: true,
  showDesc: true,
  products: [...productsA, ...productsA]
}

const groupProductsC2: GroupProducts = {
  title: '热门课程',
  columns: 2,
  priceSameLine: true,
  extra: {
    title: '更多',
    link: ''
  },
  products: [...productsA, ...productsA]
}

const groupProductsC3: GroupProducts = {
  title: '热门课程',
  columns: 3,
  titleCenter: true,
  showDesc: true,
  extra: {
    title: '更多',
    link: ''
  },
  products: [...productsA, ...productsA]
}

const groupProductsC2_2: GroupProducts = {
  title: '热门课程',
  columns: 2,
  titleCenter: true,
  showDesc: true,
  showVisits: true,
  extra: {
    center: true,
    title: '更多',
    link: ''
  },
  products: [...productsA, ...productsA,
  { image: product1, title: '17期 | 绘本插画·综合技法线上课', price: 0, desc: ' 插画基础提升 | 拓展故事思维 | 打造专属风格 | 实现商业落地 ', tags: ["1", "2"], visits: 200, oldPrice: 4580 },
  ]
}

const introUser: IntroUser = {
  avatar: IntroUserAvatar,
  name: '芜小娴 YUKI',
  desc: '创艺盒插画学院创始人，布莱顿大学插画硕士，全网粉丝10W+插画大V博主。',
  items: [
    { tag: '大专栏', title: '插画师的商业变现之路', link: '' },
    { tag: '专栏', title: '商业插画&绘本创作 | 大师班', link: '' },
  ]
}

const onProductClick = (product: Product) => {
  console.log('product click', product);
};

</script>
<template>
  <div class="flex flex-col">
    <VanImage :src="banner" height="25vh" fit="cover" />
    <VanGrid :border="false" :column-num="5">
      <VanGridItem v-for="(item, index) in gridItems" :key="index" :icon="item.icon" :text="item.text" />
    </VanGrid>

    <div class="flex flex-row gap-2 items-start justify-start w-full px-2">
      <HorizontalProductCard v-for="(product, index) in productsA" :key="index" :product="product" :show-tags="true"
        :show-visits="true" @product-click="onProductClick" />
    </div>
    <IntroUserCard class="m-2 p-2" v-bind="introUser" />
    <GroupProductCard class="m-2 p-2" v-bind="groupProductsC2" @product-click="onProductClick" />
    <GroupProductCard class="m-2 p-2" v-bind="groupProductsC1" @product-click="onProductClick" />
    <GroupProductCard class="m-2 p-2" v-bind="groupProductsC3" @product-click="onProductClick" />
    <GroupProductCard class="m-2 p-2" v-bind="groupProductsC2_2" @product-click="onProductClick" />
  </div>
</template>