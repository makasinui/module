<template>
    <section class="flex flex-col gap-[60px]">
        <UiTitle>Articles</UiTitle>
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
