import axios from 'axios';

const base_url = 'https://fakestoreapi.com'

export const getAllProducts = async () => {
      const res= await axios.get(`${base_url}/products`)
      return res.data;
}

export const getProductsId = async (id) => {
    const res= await axios.get(`${base_url}/products/${id}`)
    return res.data;
}

export const getProductsImage = async (id) => {
    const res= await axios.get(`${base_url}/products/${id}/image`)
    return res.data;
}
