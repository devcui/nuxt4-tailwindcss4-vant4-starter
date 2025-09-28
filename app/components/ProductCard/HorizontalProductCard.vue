<script lang="ts" setup>
import type { Product } from './product-card.types';

const props = withDefaults(defineProps<{ product: Product; showTags?: boolean; showVisits?: boolean }>(), {
    showTags: false,
    showVisits: false,
});

const emit = defineEmits<{ (e: 'productClick', product: Product): void }>();

function hasLink(p: Product): p is Product & { link?: string } {
    const maybe = p as unknown as Record<string, unknown>;
    return typeof maybe.link === 'string' && maybe.link !== '';
}

function onClick() {
    emit('productClick', props.product);
    if (hasLink(props.product)) navigateTo(props.product.link as string);
}
</script>

<template>
    <div class="flex-1 basis-0 min-w-0 flex flex-col items-center bg-white rounded gap-2 cursor-pointer"
        @click="onClick">
        <div class="w-full overflow-hidden rounded aspect-[4/3]">
            <img alt="Product Image" class="w-full h-full object-cover" v-lazy="product.image" />
        </div>
        <div class="flex flex-col gap-1 px-3">
            <p class="text-lg   font-semibold text-gray-800 line-clamp-2">{{ product.title }}</p>
            <p class="  text-base text-gray-600 line-clamp-1">{{ product.desc }}</p>
            <div class="flex flex-col items-start justify-start">
                <span class="text-base  font-bold text-red-500">${{ product.price }}</span>
                <span class="text-base  font-bold text-gray-500 line-through">${{ product.oldPrice }}</span>
            </div>
        </div>
    </div>
</template>