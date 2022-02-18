import {
  AUTHENTICATED_PAGES_EN, AUTHENTICATED_PAGES_LT,
  NEWS_AND_MESSAGES_EN, NEWS_AND_MESSAGES_LT,
  USUAL_PAGES_EN, USUAL_PAGES_LT,
} from '../../constants/navbar';
import logo from '../../../../favicon.png';
import '../../../../css/index.scss';
import useAuth from '../../utils/useAuth';
import LogOutButton from './LogOutButton';
import useDayMode from '../../utils/useDayMode';
import useLithuanian from '../../utils/useLithuanian';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { hasDayMode, setHasDayMode } = useDayMode();
  const { isLithuanian, setIsLithuanian } = useLithuanian();

  const { isInitializing, user } = useAuth(true);

  const authenticatedPages = isLithuanian ? AUTHENTICATED_PAGES_LT : AUTHENTICATED_PAGES_EN;
  const usualPages = isLithuanian ? USUAL_PAGES_LT : USUAL_PAGES_EN;
  const pages = user ? authenticatedPages : usualPages;

  const links = pages
    .map((value) => {
      const link = (value !== NEWS_AND_MESSAGES_EN && value !== NEWS_AND_MESSAGES_LT)
        ? value.split(' ').join('-')
        : '/';

      const page = value[0].toUpperCase() + value.slice(1);

      return (
        <li className="nav-item">
          <Link className="nav-link ${value === decodeURI(locationPath) ? 'active' : ''}" to={link}>{page}</Link>
        </li>
      );
    })
    .join('');

  const handleNavbarCollapse = (e) => e.target.classList.toggle('show');

  if (isInitializing || !user) return null;

  return (
    <nav className={`navbar navbar-expand-lg position-sticky navbar-${!hasDayMode ? 'dark navbar-grey' : 'light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="rounded logo" src={logo} alt="company logo" />
        </Link>

        <button className="navbar-toggler" type="button" onClick={handleNavbarCollapse}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {links}
          </ul>
        </div>
      </div>

      <div className="col-4 text-end me-5">
        <button type="button" className={`btn btn-${isLithuanian ? '' : 'outline-'}dark`} onClick={setIsLithuanian}>
          LT
        </button>

        <button type="button" className={`btn btn-${!isLithuanian ? '' : 'outline-'}dark`} onClick={() => setIsLithuanian(false)}>
          EN
        </button>

        <button type="button" className={`btn btn-${hasDayMode ? '' : 'outline-'}dark`} onClick={setHasDayMode}>
          <i className="material-icons-outlined">light_mode</i>
        </button>

        <button type="button" className={`btn btn-${!hasDayMode ? '' : 'outline-'}dark`} onClick={() => setHasDayMode(false)}>
          <i className="material-icons-outlined">dark_mode</i>
        </button>

        {user && await LogOutButton()}
      </div>
    </nav>
  );
};

export default Navbar;
