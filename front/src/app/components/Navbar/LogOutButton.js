import { getAuth, signOut } from 'firebase/auth'
import { LOG_OUT_BUTTON } from '../../constants/navbar'
import { v4 as uuidv4 } from 'uuid'

const LogOutButton = () => {
  const auth = getAuth();
  const logOutButtonId = uuidv4();

  const handleLogout = () => {
      signOut(auth).then(() => {
        history.pushState({ path: 'login' }, '', `/login`);
        location.replace(`/login`);
      });
  };

  setTimeout(() => {
    const logOutButton = document.getElementById(logOutButtonId);

    if (logOutButton)
      logOutButton.addEventListener('click', handleLogout);
  }, 1000);

  return (`
    <button class="btn btn-outline-danger" id=${logOutButtonId} type="button">
        ${LOG_OUT_BUTTON}
    </button>
  `);
};

export default LogOutButton;
