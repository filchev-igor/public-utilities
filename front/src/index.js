import 'material-icons/iconfont/filled.css';
import "bootstrap/scss/bootstrap.scss";
import AmountOfConsumed from "./app/pages/AmountOfConsumed";
import {
    AMOUNTS_OF_CONSUMED,
    BILLS, CONTACTS, CONTENT_ADDING,
    NEWS_AND_MESSAGES, AUTHENTICATED_USER_PAGES,
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
import Login from './app/pages/Login';
//import { initializeApp } from 'firebase/app'
//import { FIREBASE_CONFIG } from './app/constants/firebase'
//import { getAuth, onAuthStateChanged } from 'firebase/auth'

class App {
    #root = document.getElementById('root');

    render = () => {
        let Component;

        const {state} = history;
        const {path} = state ?? DEFAULT_PATH;

        const inputPath = location.pathname
        .split('/')[1]
        .split('-')
        .join(' ');

        const isLocationInputEventFired = !!inputPath;
        const isInputLocationExisting = AUTHENTICATED_USER_PAGES.includes(inputPath);

        const currentPath = isLocationInputEventFired && isInputLocationExisting
          ? inputPath
          : path
          .split('-')
          .join(' ');

        /*
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;

                console.log('authentication status: passed!');
            } else {
                console.log('authentication status: failed!');

                //location.replace("/login");
            }
        });
         */

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

      /* if (isLocationInputEventFired && !isInputLocationExisting) {
            this.#root.innerHTML = Page404();

            history.replaceState(
              { path: inputPath },
              "",
              `/${inputPath.split(' ').join('-')}`
            );
        }
        else {
            this.#root.innerHTML = Component();

            history.replaceState(
              { path: currentPath },
              "",
              `/${currentPath !== 'news and messages'
                ? currentPath.split(' ').join('-')
                : ''}`
            );
        }   */

          new Login();
       // this.#root.innerHTML = AmountOfConsumed();


    }
}

//initializeApp(FIREBASE_CONFIG);

const app = new App();
app.render();
