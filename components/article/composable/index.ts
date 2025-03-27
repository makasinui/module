import { httpGetPost } from '~/api/post';
import type { IPost } from '~/types/posts';
export const useArticle = (id: string) => {
    const isLoading = ref(false);
    const article = ref<IPost>();
    const image = ref("");

    const fetchData = async () => {
        try {
            isLoading.value = true;
            const data = await httpGetPost(id);
            if(data?.id) {
                article.value = data;
                image.value = article.value.image;
            }
        } catch(err) {
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    const onErrorImage = () => {
        image.value = '/mock_detail.png'
    }

    return {
        isLoading,
        article,
        image,
        fetchData,
        onErrorImage
    }
}