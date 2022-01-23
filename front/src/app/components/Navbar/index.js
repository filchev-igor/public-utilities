import {PAGES} from '../../constants/navbar';
import { v4 as uuidv4 } from 'uuid';
import logo from "../../../../favicon.png";

const Navbar = () => {
    const linksId = [];

    const links = PAGES
    .map(value => {
        const link = value
        .split(' ')
        .join('-');

        const id = uuidv4();

        linksId.push(id);

        const page = value[0].toUpperCase() + value.slice(1);

        return (`
            <li class="nav-item">
                <a class="nav-link" id=${id} href="${link}">${page}</a>
            </li>`)
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

                const obj = {
                    path: element.href.split('/')[3]
                };

                history.replaceState(obj, "", "/");
                location.replace("/");
            });
        }
    };

    return (`
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src=${logo}>
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
        </nav>
    `);
};

export default Navbar;
