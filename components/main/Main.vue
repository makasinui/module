<template>
    <section class="mt-[120px] mx-[112px] flex flex-col gap-[60px]">
        <h1 class="text-[84px] leading-[100%]">Articles</h1>
        <Posts
            v-if="!isLoading"
            :posts="paginatedPosts" 
        />
        <UiLoader v-else />
        <UiPagination
            :pages="pages"
            :model-value="page"
            @update:model-value="onChangePage" 
        />
    </section>
</template>

<script lang="ts" setup>
import { useArticles } from './composable';

const { 
    paginatedPosts, 
    isLoading, 
    page, 
    pages, 
    fetchData,
    onChangePage
} = useArticles();

fetchData();
</script>
