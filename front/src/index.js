import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/filled.css';
import AmountOfConsumed from "./app/pages/AmountOfConsumed";
import {
    AMOUNTS_OF_CONSUMED,
    BILLS, CONTACTS, CONTENT_ADDING,
    NEWS_AND_MESSAGES, PAGES,
    SETTINGS,
} from './app/constants/navbar';
import {DEFAULT_PATH} from './app/constants/navigation';
import Bills from './app/pages/Bills';
import Settings from './app/pages/Settings';
import NewsAndMessages from './app/pages/NewsAndMessages';
import Contacts from './app/pages/Contacts';
import ContentAdding from './app/pages/ContentAdding';
import Home from './app/pages/Home';
import Page404 from './app/pages/Page404';

class App {
    #root = document.getElementById('root');

    render() {
        let Component;
        const root = this.#root;

        const {state} = history;
        const {path} = state ?? DEFAULT_PATH;

        const inputPath = location.pathname
        .split('/')[1]
        .split('-')
        .join(' ');

        const isInputLocationExisting = PAGES.includes(inputPath);

        const currentPath = isInputLocationExisting ? inputPath : path
            .split('-')
            .join(' ');

        const isPageSelected = PAGES.includes(currentPath);

        if (currentPath === SETTINGS) {
            Component = Settings;
        } else if (currentPath === BILLS) {
            Component = Bills;
        } else if (currentPath === NEWS_AND_MESSAGES) {
            Component = NewsAndMessages;
        } else if (currentPath === CONTACTS) {
            Component = Contacts;
        } else if (currentPath === AMOUNTS_OF_CONSUMED) {
            Component = AmountOfConsumed;
        } else if (currentPath === CONTENT_ADDING) {
            Component = ContentAdding;
        } else {
            Component = Home;
        }

        const obj = {
            path: currentPath
        };

        if (isInputLocationExisting || isPageSelected)
            history.replaceState(obj, "", `/${currentPath !== 'home' ? currentPath : ''}`);

        root.innerHTML = isInputLocationExisting || isPageSelected ? Component() : Page404();
    }
}

const app = new App();
app.render();
