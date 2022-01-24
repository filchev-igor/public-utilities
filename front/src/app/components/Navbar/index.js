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

const Navbar = () => {
    const linksId = [];

    const { isInitializing, user } = useAuth(true);

    if (isInitializing || !user)
      return;

    const links = (user ? AUTHENTICATED_PAGES : USUAL_PAGES)
    .map(value => {
        const link = value !== NEWS_AND_MESSAGES
          ? value.split(' ').join('-')
          : '/';

        const id = uuidv4();

        linksId.push(id);

        const page = value[0].toUpperCase() + value.slice(1);

        return (`
            <li class="nav-item">
                <a class="nav-link" id=${id} href="${link}">${page}</a>
            </li>`);
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

    return (`
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
          
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">LT</a></li>
              <li><a class="dropdown-item" href="#">EN</a></li>
            </ul>
          </div>
          
          <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Mode
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Light</a></li>
                  <li><a class="dropdown-item" href="#">Dark</a></li>
              </ul>
          </div>
          
          ${user ? LogOutButton() : ''}
        </nav>
    `);
};

export default Navbar;
