import { AUTHENTICATED_USER_PAGES } from '../../constants/navbar'
import { v4 as uuidv4 } from 'uuid';
import logo from "../../../../favicon.png";
import "../../../../css/index.scss";

const Navbar = () => {
    const linksId = [];

    const links = AUTHENTICATED_USER_PAGES
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
        </nav>
    `);
};

export default Navbar;
