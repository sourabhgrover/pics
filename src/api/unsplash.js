import axios from 'axios';

export default axios.create({
baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 96f5797f41416fbe73622079a8e1845f9724f43ebb9d77e0225015a3d6172b2b'
    }});