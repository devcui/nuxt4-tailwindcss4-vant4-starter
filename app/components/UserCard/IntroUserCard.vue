<script lang="ts" setup>
import { type IntroUser } from './user-card.types';

const props = defineProps<IntroUser>();
</script>


<template>
    <div class="bg-white rounded">
        <div class="flex items-start gap-3">
            <img alt="avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" v-lazy="props.avatar" />
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-sm font-semibold text-gray-800">{{ props.name }}</span>
                        </div>
                        <p v-if="props.desc" class="text-xs text-gray-500 mt-1">{{ props.desc }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="props.items?.length" class="mt-3 flex flex-col">
            <template v-for="(item, index) in props.items" :key="index">
                <NuxtLink :to="item.link" class="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                    <span class="text-xs font-medium text-purple-600 border border-purple-200  px-2 py-1">
                        {{ item.tag }}
                    </span>
                    <span class="text-base  font-bold text-gray-800">{{ item.title }}</span>
                </NuxtLink>
            </template>
        </div>
    </div>
</template>