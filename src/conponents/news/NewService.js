import AxiosInstance from "../../helper/AxiosInstance";
export const getNews = async () => {
    const respone = await AxiosInstance().get('/articles');
    return respone.data;
}
export const getNewsDetail = async (id) => {
    const respone = await AxiosInstance().get(`/articles/${id}/detail `);
    return respone.data;
};
// upload image
export const uploadImage = async (form) => {
    const response = await AxiosInstance('multipart/form-data')
        .post('/media/upload', form);
    return response.data;
}

// add news
export const addNews = async (data) => {
    const response = await AxiosInstance().post('/articles', data);
    return response.data;
}
// tim kiem bai viet
export const searchNews = async (title) => {
    const response = await AxiosInstance().get(`/articles/search?title=`+title);
    return response.data;
}
// lay bai viet ca nhan
export const getMyNews = async () => {
    const respone = await AxiosInstance().get('/articles/my-articles');
    return respone.data;
}