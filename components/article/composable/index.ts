import type { IPost } from '~/types/posts';
export const useArticle = (id: string) => {
    const isLoading = ref(false);
    const article = ref<IPost>();
    const image = ref("");

    const fetchData = async () => {
        try {
            isLoading.value = true;
            const { data } = await useFetch<IPost>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + id)
            
            if(data?.value) {
                article.value = data.value;
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