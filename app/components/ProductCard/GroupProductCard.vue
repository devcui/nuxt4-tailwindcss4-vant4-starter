<script lang="ts" setup>
import type { GroupProducts, Product } from './product-card.types';

const props = withDefaults(defineProps<GroupProducts>(), {
    columns: 1,
    priceSameLine: false,
    showTag: false,
    showDesc: false,
    showVisits: false,
    titleCenter: false,
    products: () => [] as Product[],
});

const emit = defineEmits<{ (e: 'productClick', product: Product): void }>();

const displayClass = computed(() => {
    const colsMap: Record<number | string, string> = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' };
    const colsClass = colsMap[Number(props.columns)] || 'grid-cols-1';
    return ['grid', colsClass, 'gap-3'].join(' ');
});

const aspectClass = computed(() => {
    const cols = Number(props.columns);
    if (cols === 1) return 'aspect-[4/3]';
    if (cols === 2) return 'aspect-[4/3]';
    return 'aspect-square';
});

const isSingleColumn = computed(() => Number(props.columns) === 1);

const contentClass = computed(() => (isSingleColumn.value ? 'items-center text-center' : 'items-start text-left'));

const priceClass = computed(() => {
    if (props.priceSameLine) return isSingleColumn.value ? 'flex items-center gap-2 justify-center' : 'flex items-center gap-2';
    return isSingleColumn.value ? 'flex flex-col items-center' : 'flex flex-col items-start';
});

const visitsClass = computed(() => (props.priceSameLine && !isSingleColumn.value ? 'ml-auto text-sm text-gray-500' : 'text-sm text-gray-500'));

function hasLink(p: Product): p is Product & { link?: string } {
    const maybe = p as unknown as Record<string, unknown>;
    return typeof maybe.link === 'string' && maybe.link !== '';
}

function onClick(product: Product) {
    emit('productClick', product);
    if (hasLink(product)) navigateTo(product.link as string);
}

</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-3">
            <p :class="{ 'flex-1 text-center': props.titleCenter }">{{ props.title }}</p>
            <NuxtLink v-if="props.extra" :to="props.extra?.link">{{ props.extra?.title }}</NuxtLink>
        </div>

        <div :class="displayClass">
            <div v-for="(product, index) in props.products" :key="index" class="h-full">
                <div class="flex flex-col items-stretch bg-white rounded gap-2 overflow-hidden h-full cursor-pointer"
                    @click="onClick(product)">
                    <div class="w-full relative overflow-hidden">
                        <div :class="['w-full', aspectClass, 'overflow-hidden']">
                            <img alt="Product Image" class="w-full h-full object-cover" v-lazy="product.image" />
                        </div>
                        <div v-if="props.showTag && product.tags?.length"
                            class="absolute right-2 bottom-2 flex flex-row flex-nowrap items-center gap-1">
                            <span v-for="(tag, tIdx) in product.tags" :key="`tag-${index}-${tIdx}`"
                                class="text-xs bg-black/60 text-white px-2 py-0.5 rounded-none shadow-none border-0">
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <div :class="['flex flex-col gap-1 px-3 flex-1', contentClass]">
                        <p class="text-lg font-semibold text-gray-800 line-clamp-2">{{ product.title }}</p>
                        <p v-if="props.showDesc" class="text-base text-gray-600 line-clamp-1">{{ product.desc }}</p>

                        <div :class="[priceClass, 'mt-auto', 'w-full']">
                            <span v-if="product.price === 0" class="text-base font-bold text-green-500">免费</span>
                            <span v-else class="text-base font-bold text-red-500">${{ product.price }}</span>

                            <span v-if="product.price !== 0 && product.oldPrice && product.oldPrice > 0"
                                class="text-base font-bold text-gray-500 line-through">
                                ${{ product.oldPrice }}
                            </span>

                            <span v-if="props.showVisits" :class="visitsClass">
                                {{ product.visits }}人观看
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>