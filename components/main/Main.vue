<template>
    <section class="mt-[120px] mx-[112px] flex flex-col gap-[60px]">
        <h1 class="text-[84px] leading-[100%]">Articles</h1>
        <Posts
            v-if="!isLoading"
            :posts="paginatedPosts" />
        <Loader v-else />
    </section>
</template>

<script lang="ts" setup>
import Loader from '../ui/Loader.vue';
import { useArticles } from './composable';

const { paginatedPosts, isLoading, page, fetchData, getPaginatedData } = useArticles();

fetchData();
</script>
