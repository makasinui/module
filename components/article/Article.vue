<template>
    <UiLoader v-if="isLoading" />
    <div v-else-if="article">
        <UiTitle>{{ article.title }}</UiTitle>
        <img :src="image" @error="onErrorImage" alt="Image" class="max-h-[700px] mt-[73px]">
        <div class="mt-[80px]">
            <p>About</p>
            <p class="max-w-[695px] pt-[32px] text-[36px] leading-[124%]">
                {{ article.description }}
            </p>
        </div>
    </div>
    <div v-else>
        Не найдено!
    </div>
</template>

<script lang="ts" setup>
import { useArticle } from './composable';

const route = useRoute();

const {
    article,
    isLoading,
    image,
    fetchData,
    onErrorImage
} = useArticle(route.params.id as string);

fetchData()
</script>