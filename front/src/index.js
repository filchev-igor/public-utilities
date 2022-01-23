import 'material-icons/iconfont/filled.css';
import "bootstrap/scss/bootstrap.scss";
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

        const isLocationInputEventFired = !!inputPath;
        const isInputLocationExisting = PAGES.includes(inputPath);

        const currentPath = isLocationInputEventFired && isInputLocationExisting
          ? inputPath
          : path
            .split('-')
            .join(' ');

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

        if (isLocationInputEventFired && !isInputLocationExisting) {
            root.innerHTML = Page404();

            history.replaceState(
              { path: inputPath },
              "",
              `/${inputPath.split(' ').join('-')}`
            );
        }
        else {
            root.innerHTML = Component();

            history.replaceState(
              { path: currentPath },
              "",
              `/${currentPath !== 'home'
                ? currentPath.split(' ').join('-')
                : ''}`
            );
        }
    }
}

const app = new App();
app.render();
