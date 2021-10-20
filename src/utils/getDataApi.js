import axios from "axios";
import { API_KEY } from '../constants/api'

class GetDataApi {
    //API запрос
    async getData(url) {
        try {
            const responce = await axios.get(url, {
                params: {
                    apikey: API_KEY,
                    limit: 100,
                }
            })
                .then(res => res.data.data.results)
            return responce;
        } catch (error) {
            console.error(Promise.reject(error));
            return false
        }
    }
}

export const getDataApi = new GetDataApi();

