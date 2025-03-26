<template>
    <NuxtLink
        :to="`/article/${post.id}`"
        class="flex flex-col gap-6 min-h-[360px]"
        :class="{ '-mt-5': index === 0 }"
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
    </NuxtLink>
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
