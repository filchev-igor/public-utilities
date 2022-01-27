import {
    AUTHENTICATED_PAGES,
    NEWS_AND_MESSAGES,
    USUAL_PAGES,
} from '../../constants/navbar';
import { v4 as uuidv4 } from 'uuid';
import logo from "../../../../favicon.png";
import "../../../../css/index.scss";
import useAuth from '../../utils/useAuth';
import LogOutButton from './LogOutButton';
import "./NavbarStyle.scss";
import useLightMode from '../../utils/useLightMode';

const Navbar = async () => {
    const linksId = [];

    const { sethasDayMode } = await useLightMode();

    const lightModeButtonId = uuidv4();
    const darkModeButtonId = uuidv4();

    const { isInitializing, user } = useAuth(true);

    if (isInitializing || !user)
        return;

    const links = (user ? AUTHENTICATED_PAGES : USUAL_PAGES)
        .map((value) => {
            const link = value !== NEWS_AND_MESSAGES
                ? value.split(' ').join('-')
                : '/';

            const id = uuidv4();

            linksId.push(id);

            const page = value[0].toUpperCase() + value.slice(1);

            return (`
              <li class="nav-item">
                  <a class="nav-link" id=${id} href="${link}">${page}</a>
              </li>
            `);
        })
        .join('');

    /*
    Link go event is being mocked here
     */
    window.onload = () => {
        for (const id of linksId) {
            const element = document.getElementById(id);

            element.addEventListener('click', (e) => {
                e.preventDefault();

                const path = element.href.split('/')[3];

                const obj = {
                    path: path,
                };

                history.pushState(obj, '', `/${path}`);
                location.replace(`/${path}`);
            });
        }
    };

  setTimeout(() => {
    const lightModeButton = document.getElementById(lightModeButtonId);
    const darkModeButton = document.getElementById(darkModeButtonId);

    if (lightModeButton) {
      lightModeButton.addEventListener('click', sethasDayMode());
    }

    if (darkModeButton)
      darkModeButton.addEventListener('click', sethasDayMode(false));
  }, 100);

    const isDarkMode = false;
    return isDarkMode ?

        (`
        <nav class="navbar dark navbar-expand-lg navbar-light bg-light position-sticky">
          <div class="container-fluid">
            <a href="/">
                <img class="rounded logo" src=${logo} alt="company logo">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                ${links}
              </ul>
              
              <button type="button" class="btn btn-dark" id="${lightModeButtonId}">
            <i class="material-icons-outlined">light_mode</i>
          </button>
              
          <button type="button" class="btn btn-dark" id="${darkModeButtonId}">
            <i class="material-icons-outlined">dark_mode</i>
          </button>
            </div>
          </div>
          
   
          
          ${user ? LogOutButton() : ''}
        </nav>
    `)

        :

        (`
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img class="rounded logo" src=${logo} alt="company logo">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                ${links}
              </ul>
            </div>
          </div>

            ${user ? LogOutButton() : ''}
        </nav>
    `);
};

export default Navbar;
