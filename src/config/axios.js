import axios from 'axios';
let axiosInstance = axios.create({
    // baseURL: 'process.env.REACT_APP_BASE_API',
    timeout: 10000,
    headers: { "Access-Control-Allow-Origin": "*"},
  });
  axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status===500) {
        //show internal server error
    }
    if (error.response.status === 400) {
        //shoe bad data error
    }
    if (error.response.status === 401) {
        //shoe unauthorized error
    }
    if (error.response.status === 404) {
        //show not found error
    }
    
    return Promise.reject(error);
  });
  axiosInstance.interceptors.request.use(
    reqConfig => {
      if (!reqConfig.url.includes('/public'))
      {
        reqConfig.headers['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
        return reqConfig;
      }
    },
    err => Promise.reject(err),
  );
export default axiosInstance;