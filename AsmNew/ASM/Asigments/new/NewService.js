import AxiosInstance from "../helpers/AxiosInstance";

export const getNews = async () => {
    const respone = await AxiosInstance().get('/articles');
    return respone.data;
}

export const getNewsDetail = async (id) => {
    const respone = await AxiosInstance().get(`/articles/${id}/detail`);
    return respone.data;
}

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
// get Bai viet cua toi
export const getProfile = async () => {
    const respone = await AxiosInstance().get(`/articles`);
    return respone.data;
}
// tiem kiem bai viet\const Search = async() =>{

        
