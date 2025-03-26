<template>
    <div class="grid grid-cols-4 gap-x-[32px] gap-y-[40px]">
        <Post
            v-for="(post, idx) in posts"
            :key="post.id"
            :post="post"
            :first-block="idx === 0"
        />
    </div>
</template>

<script lang="ts" setup>
import { type IPost } from '~/types/posts';
interface IProps {
    posts: IPost[];
}

defineProps<IProps>();
</script>
