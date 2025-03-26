<template>
    <button class="py-4 px-8 bg-[#101010] rounded-full leading-none flex text-white cursor-pointer">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
interface IProps {
    className?: string;
}
</script>
