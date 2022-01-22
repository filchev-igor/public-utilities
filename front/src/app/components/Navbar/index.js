import 'materialize-css/dist/css/materialize.min.css';

const Navbar = () => {
    const menu = [
        "settings","bills","news and messages","contacts","amounts of consumed","content adding"

    ];

    const links = menu
    .map(value => {
        const link = value
        .split(' ')
        .join('-');

        const page = value[0].toUpperCase() + value.slice(1);

        return (`<li><a href="${link}">${page}</a></li>`)
    })
    .join('');

    return (`
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        ${links}
      </ul>
    </div>
  </nav>
  
    `);


};

export default Navbar;
