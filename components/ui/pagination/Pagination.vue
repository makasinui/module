<template>
    <div class="flex gap-2 items-center">
        <div
            v-for="i in visiblePages"
            @click="onChangePage(i)"
            class="flex cursor-pointer items-center rounded-xl justify-center size-[44px] leading-[100%] bg-[#F3F3F3] hover:bg-[#E8E8E8] transition-all duration-300"
            :class="{ '!bg-[#101010] text-white': modelValue == i }"
            :key="modelValue + i"
        >
            {{ i }}
        </div>
        <div
            class="cursor-pointer size-[44px] border border-[#E8E8E8] flex items-center justify-center rounded-xl hover:bg-[#E8E8E8] transition-all duration-300"
            v-if="showNextArrow"
            @click="onChangePage(modelValue + 1)"
        >
            <img
                src="/arrow_right.svg"
                alt="Next page" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePagination } from './composable';

interface IProps {
    pages: number;
    modelValue: number;
}

type TEmits = {
    'update:modelValue': [page: number];
};

const emit = defineEmits<TEmits>();
const props = defineProps<IProps>();

const { modelValue, pages } = toRefs(props);

const { visiblePages, showNextArrow } = usePagination(modelValue, pages);

const onChangePage = (page: number) => {
    if (page !== props.modelValue) {
        emit('update:modelValue', page);
    }
};
</script>
