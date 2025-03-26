import type { IPost } from '~/types/posts';

export const useArticles = () => {
    const posts = ref<IPost[]>([]);
    const paginatedPosts = ref<IPost[]>([]);
    const isLoading = ref(false);
    const page = ref(1);
    const pages = ref(0);

    const getPaginatedData = (page: number) => {
        const perPage = 8;
        
        const data = posts.value;
        const paginatedList = [];

        let result = [...data];

        while(result.length >= perPage) {
            paginatedList.push(result.slice(0, perPage));
            result = result.slice(perPage, data.length);
        }

        paginatedList.push(result);
        pages.value = Math.ceil(data.length / perPage);
        return paginatedList[page - 1];
    }

    const fetchData = async () => {
        try {
            isLoading.value = true;
            const { data } = await useFetch<IPost[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');

            if (data?.value) {
                posts.value = data.value;

                const paginatedData = getPaginatedData(page.value);
                paginatedPosts.value = paginatedData;
            }
        } catch (err) {
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    };

    const onChangePage = (ev: number) => {
        page.value = ev;
        paginatedPosts.value = getPaginatedData(page.value);
    }

    return {
        paginatedPosts,
        isLoading,
        page,
        pages,
        fetchData,
        getPaginatedData,
        onChangePage,
    };
};
