import { computed } from 'vue';

export const usePagination = (modelValue: Ref<number>, pages: Ref<number>) => {
    const maxVisiblePages = 5;
    
    const visiblePages = computed(() => {
        const pagesValue = pages.value;
        const currentPage = modelValue.value;

        if (pagesValue <= maxVisiblePages) {
            return Array.from({ length: pagesValue }, (_, i) => i + 1);
        }
        
        let start = Math.max(1, currentPage - 2);
        if (currentPage > pagesValue - 2) {
            start = pagesValue - maxVisiblePages + 1;
        }
        
        return Array.from({ length: maxVisiblePages }, (_, i) => start + i);
    });

    const showNextArrow = computed(() => {
        return modelValue.value < pages.value && pages.value > maxVisiblePages;
    });

    return {
        visiblePages,
        showNextArrow
    };
};