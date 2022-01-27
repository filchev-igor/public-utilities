import 'material-icons/iconfont/filled.scss';
import 'material-icons/iconfont/outlined.scss';
import "bootstrap/scss/bootstrap.scss";
import AmountOfConsumed from "./app/pages/AmountOfConsumed";
import {
    AMOUNTS_OF_CONSUMED,
    AUTHENTICATED_PAGES,
    BILLS,
    CONTACTS,
    CONTENT_ADDING,
    LOGIN,
    NEWS_AND_MESSAGES,
    SETTINGS,
    SIGN_UP,
} from './app/constants/navbar';
import Bills from './app/pages/Bills';
import Settings from './app/pages/Settings';
import NewsAndMessages from './app/pages/NewsAndMessages';
import Contacts from './app/pages/Contacts';
import ContentAdding from './app/pages/ContentAdding';
import Page404 from './app/pages/Page404';
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from './app/constants/firebase';
import Login from './app/pages/Login';
import Signup from './app/pages/Signup';
import useAuth from './app/utils/useAuth';

class App {
    #root = document.getElementById('root');
    #isAuthInitialized = false;

    constructor (isAuthInitialized = false) {
        this.#isAuthInitialized = isAuthInitialized;

        this.#render();
    }

    #render = async () => {
        let Component;

        const { isInitializing, user } = useAuth(this.#isAuthInitialized);

        if (isInitializing && !this.#isAuthInitialized)
            return;

        const locationPath = location.pathname !== '/'
            ? location.pathname
                .split('/')[1]
                .split('-')
                .join(' ')
            : NEWS_AND_MESSAGES;

        if (user) {
            const isLocationPathExisting = AUTHENTICATED_PAGES.includes(locationPath);

            if (locationPath === SETTINGS) {
                Component = Settings;
            } else if (locationPath === BILLS) {
                Component = Bills;
            } else if (locationPath === CONTACTS) {
                Component = Contacts;
            } else if (locationPath === AMOUNTS_OF_CONSUMED) {
                Component = AmountOfConsumed;
            } else if (locationPath === CONTENT_ADDING) {
                Component = ContentAdding;
            } else if (locationPath === NEWS_AND_MESSAGES) {
                Component = NewsAndMessages;
            }
            else if (!isLocationPathExisting && locationPath.length) {
                Component = Page404;
            }
        }
        else {
            if (locationPath === SIGN_UP) {
                new Signup();

                return;
            }
            else {
                history.replaceState({ path: LOGIN }, '', `/${LOGIN}`);

                new Login();

                return;
            }
        }

        this.#root.innerHTML = await Component();
    };
}

initializeApp(FIREBASE_CONFIG);

new App();

export default App;
