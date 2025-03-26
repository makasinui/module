<template>
    <nav>
        <ul class="flex gap-[32px]">
            <li
                v-for="item in items"
                :key="item"
                class="underline underline-offset-4">
                {{ item }}
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
interface IProps {
    items: string[]
}

defineProps<IProps>();
</script>
