import {PAGES} from '../../constants/navbar';
import { v4 as uuidv4 } from 'uuid';
import image from "../../../favicon.png";

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

        return (`<li><a id=${id} href="${link}">${page}</a></li>`)
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
        <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
                <img src=${image}>
            </a>
          
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            ${links}
          </ul>
        </div>
      </nav>
    `);
};

export default Navbar;
