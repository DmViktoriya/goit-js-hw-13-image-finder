
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal'
const keyApi = '23100345-a1985f2d3b70e4240f74cca05';

export function getPictures(query, page) {
    return axios.get(`&q=${query}&page=${page}&per_page=12&key=${keyApi}`);
}


