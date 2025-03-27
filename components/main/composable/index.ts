import { httpGetPosts } from '~/api/post';
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
            const data = await httpGetPosts();

            posts.value = data;
            const paginatedData = getPaginatedData(page.value);
            paginatedPosts.value = paginatedData;
            
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
