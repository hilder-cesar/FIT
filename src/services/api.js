/* eslint-disable prettier/prettier */
import { create } from 'apisauce';

const api = create({
    baseUrl: 'teste',
    baseUrlImage: '',
});

api.addResponseTransform(response => {
    if (!response.ok){ throw response; }
});

export default api;
