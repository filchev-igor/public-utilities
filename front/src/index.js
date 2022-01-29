import 'material-icons/iconfont/filled.scss';
import 'material-icons/iconfont/outlined.scss';
import "bootstrap/scss/bootstrap.scss";
import AmountOfConsumed from "./app/pages/AmountOfConsumed";
import {
    AMOUNTS_OF_CONSUMED_EN, AMOUNTS_OF_CONSUMED_LT,
    AUTHENTICATED_PAGES_EN,
    BILLS_EN, BILLS_LT,
    CONTACTS_EN, CONTACTS_LT,
    CONTENT_ADDING_EN, CONTENT_ADDING_LT,
    LOGIN_EN,
    NEWS_AND_MESSAGES_EN, NEWS_AND_MESSAGES_LT,
    SETTINGS_EN, SETTINGS_LT,
    SIGN_UP_EN,
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
import useLithuanian from './app/utils/useLithuanian';

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
        const {isLithuanian} = await useLithuanian();

        if (isInitializing && !this.#isAuthInitialized)
            return;

        const homePathName = isLithuanian ? NEWS_AND_MESSAGES_LT : NEWS_AND_MESSAGES_EN;
        const locationPath = location.pathname !== '/'
            ? location.pathname
                .split('/')[1]
                .split('-')
                .join(' ')
            : homePathName;

        if (user) {
            const isLocationPathExisting = AUTHENTICATED_PAGES_EN.includes(locationPath);

            if (locationPath === SETTINGS_EN || decodeURI(locationPath) === SETTINGS_LT) {
                Component = Settings;
            } else if (locationPath === BILLS_EN || decodeURI(locationPath) === BILLS_LT) {
                Component = Bills;
            } else if (locationPath === CONTACTS_EN || decodeURI(locationPath) === CONTACTS_LT) {
                Component = Contacts;
            } else if (locationPath === AMOUNTS_OF_CONSUMED_EN || decodeURI(locationPath) === AMOUNTS_OF_CONSUMED_LT) {
                Component = AmountOfConsumed;
            } else if (locationPath === CONTENT_ADDING_EN || decodeURI(locationPath) === CONTENT_ADDING_LT) {
                Component = ContentAdding;
            } else if (locationPath === NEWS_AND_MESSAGES_EN || decodeURI(locationPath) === NEWS_AND_MESSAGES_LT) {
                Component = NewsAndMessages;
            }
            else if (!isLocationPathExisting && locationPath.length) {
                Component = Page404;
            }
        }
        else {
            if (locationPath === SIGN_UP_EN) {
                new Signup();

                return;
            }
            else {
                history.replaceState({ path: LOGIN_EN }, '', `/${LOGIN_EN}`);

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
