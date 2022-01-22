import 'materialize-css/dist/css/materialize.min.css';
import AmountOfConsumed from "./app/pages/AmountOfConsumed";
import {PAGES} from './app/constants/navbar';

class App {
    #root = document.getElementById('root');

    render() {
        const root = this.#root;

        const links = PAGES.filter(value => {
            const link = value
            .split(' ')
            .join('-');

            return link;
        });

        root.innerHTML =  AmountOfConsumed();
    }
}

const app = new App();
app.render();
