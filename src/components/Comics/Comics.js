import { API_URL, URL_COMICS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE, URL_CHARACTER } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';
import './Comics.css'

class Comics {
    // вызываем метод getData и выводим на страницу elements
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let htmlContent = '';
        // { id, title, thumbnail: {extension, path }}
        data.forEach(({ id, title, thumbnail: { extension, path } }) => {
            // ищем в path => image_not_available
            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {

                // формируем url для запроса на  /v1/public/comics/{comicId}/characters
                const uri = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTER}`

                const imgSrc = `${path}/${IMG_STANDART_XLARGE}.${extension}`
                htmlContent += `
                <li class="comics__item" data-uri="${uri}">
                    <span class="comics__name">${title}</span>
                    <img class="comics__img" src="${imgSrc}" />
                </li>
            `;
            }

        });

        const htmlWrapper = `<ul class="comics__container">${htmlContent}</ul>`;
        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(e => {
            const uri = e.getAttribute('data-uri')
            e.addEventListener('click', () => {
                console.log(uri);
            })
        })
    }
}

export default new Comics();

