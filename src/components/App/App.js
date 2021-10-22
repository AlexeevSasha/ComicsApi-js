import Comics from '../Comics/Comics';

//css
import './App.css'


class App {

    async render() {
        await Comics.render();
    }
}

export default new App();