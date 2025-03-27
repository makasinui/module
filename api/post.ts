import type { IPost } from "~/types/posts";

export const httpGetPosts = async (): Promise<IPost[]> => {
    const { data } = await useFetch<IPost[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');

    if (data?.value) {
        return data.value;
    }

    return [];
};

export const httpGetPost = async (id: string): Promise<IPost | null> => {
    const { data } = await useFetch<IPost>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + id);

    return data.value;
}