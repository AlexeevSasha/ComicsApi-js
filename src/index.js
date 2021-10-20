import 'regenerator-runtime/runtime'
import { API_URL, URL_COMICS, URL_CHARACTER } from './constants/api'
import { getDataApi } from './utils/getDataApi'



// асинхроная функция
(async () => {
    const data = await getDataApi.getData(API_URL + URL_COMICS)
    console.log(data);
})();


