import AxiosInstance from "../helpers/AxiosInstance";

export const Sigin = async (email, password) => {
  try {
    const body = {
      email,
      password
    }
    const res = await AxiosInstance().post('/users/register', body);
    console.log('register respone: ', res);
    return res;
  } catch (err) {
    console.log('register error: ', err);
    return err;
  }
}

export const login = async (email, password) => {
  try {
    const body = {
      email: email,
      password: password
    }
    const res = await AxiosInstance().post('/auth/login', body);
    // console.log('register respone: ', res);
    return res;
  } catch (err) {
    console.log('register error: ', err);
    return err;
  }
}