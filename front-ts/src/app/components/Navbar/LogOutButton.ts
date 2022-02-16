import { getAuth, signOut } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { LOG_OUT_BUTTON_EN, LOG_OUT_BUTTON_LT } from '../../constants/navbar';
import useLithuanian from '../../utils/useLithuanian';

const LogOutButton = async () => {
  const auth = getAuth();
  const logOutButtonId = uuidv4();

  const { isLithuanian } = await useLithuanian();

  const handleLogout = () => {
    signOut(auth).then(() => {
      history.pushState({ path: 'login' }, '', '/login');
      location.replace('/login');
    });
  };

  setTimeout(() => {
    const logOutButton = document.getElementById(logOutButtonId);

    if (logOutButton) { logOutButton.addEventListener('click', handleLogout); }
  }, 1000);

  return (`
      <button type="button" class="btn btn-outline-danger text-uppercase" id=${logOutButtonId}>
        ${isLithuanian ? LOG_OUT_BUTTON_LT : LOG_OUT_BUTTON_EN}
      </button>
    `);
};

export default LogOutButton;
