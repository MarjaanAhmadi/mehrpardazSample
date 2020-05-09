import axiosInstance from '../config/axios';
//methods for these obj is get, get by id, filter by params
const productReq = async (method, params, id) => {
    //Using axios instance
    try {
        const response = await axiosInstance.get(`/v1/products/${id !== null ? id : ''}`, {params: params});
        if(response.data);
        return response;
    } catch (error) {
    }
};
export default productReq;