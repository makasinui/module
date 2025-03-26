<template>
    <NuxtLink :to="`/article/${post.id}`" class="flex flex-col gap-6 min-h-[360px]" :class="{'-mt-5': firstBlock}">
        <img class="w-full h-full min-h-[270px]" :src="image" @error="onError" :alt="post.title">
        <p class="text-[20px] leading-[120%]">
            {{ post.preview }}
        </p>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { IPost } from '~/types/posts';

interface IProps {
    post: IPost
    firstBlock: boolean
}

const props = defineProps<IProps>();
const { post } = toRefs(props);

const image = ref(post.value.image);

const onError = () => {
    // if image doesn't exist display mock
    image.value = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4c3f8127825395.6149efeb6615a.jpg"
}
</script>