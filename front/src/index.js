import 'materialize-css/dist/css/materialize.min.css';
import AmountOfConsumed from "./app/pages/AmountOfConsumed";
import {
    AMOUNTS_OF_CONSUMED,
    BILLS, CONTACTS, CONTENT_ADDING,
    HOME,
    NEWS_AND_MESSAGES,
    SETTINGS,
} from './app/constants/navbar';
import {DEFAULT_PATH} from './app/constants/navigation';
import Bills from './app/pages/Bills';
import Settings from './app/pages/Settings';
import NewsAndMessages from './app/pages/NewsAndMessages';
import Contacts from './app/pages/Contacts';
import ContentAdding from './app/pages/ContentAdding';
import Home from './app/pages/Home';

class App {
    #root = document.getElementById('root');

    render() {
        const root = this.#root;

        const {state} = history;
        const {path} = state ?? DEFAULT_PATH;

        const currentPath = path
            .split('-')
            .join(' ');

        let Component = Home;

        switch (currentPath) {
            case SETTINGS:
                Component = Settings;
                break;
            case BILLS:
                Component = Bills;
                break;
            case NEWS_AND_MESSAGES:
                Component = NewsAndMessages;
                break;
            case CONTACTS:
                Component = Contacts;
                break;
            case AMOUNTS_OF_CONSUMED:
                Component = AmountOfConsumed;
                break;
            case CONTENT_ADDING:
                Component = ContentAdding;
                break;
            case HOME:
                Component = Home;
                break;
        }

        root.innerHTML =  Component();
    }
}

const app = new App();
app.render();
