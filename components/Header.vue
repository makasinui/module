<template>
    <header class="max-h-[121px] py-10 px-10 flex items-center justify-between">
        <img src="/logo.svg" />
        <nav class="text-[20px] flex gap-[91px] items-center">
            <div class="flex gap-[56px]">
                <a href="#"> Works </a>
                <a href="#"> About </a>
            </div>
            <div class="flex gap-4 items-center">
                <div class="rounded-full p-[14px] border-2 border-[#0000001A]">
                    <img
                        src="/lang.svg"
                        alt="" />
                </div>
                <Button> Let’s work </Button>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue';
</script>
