<template>
    <div
        class="flex group relative flex-col gap-6 min-h-[360px] hover:-translate-y-5 transition-all duration-300"
    >
        <img
            class="w-full h-[280px] object-cover"
            :src="image"
            :alt="post.title" 
            @error="onError"
        />

        <p class="text-[20px] leading-[120%]" :class="{'pt-[10px]': hasAdditionalPadding}">
            {{ post.preview }}
        </p>
        <NuxtLink :to="`/article/${post.id}`" class="text-[#E2BEFF] text-[20px] bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Read more
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import type { IPost } from '~/types/posts';

interface IProps {
    post: IPost;
    index: number;
}

const props = defineProps<IProps>();
const { post, index } = toRefs(props);

const image = ref(post.value.image);

const hasAdditionalPadding = computed(() => (index.value + 1) % 2 !== 0)

const onError = () => {
    // if image doesn't exist display mock
    image.value = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4c3f8127825395.6149efeb6615a.jpg';
};
</script>
