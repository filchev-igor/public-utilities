import { getAuth, onAuthStateChanged } from 'firebase/auth';
import App from '../../index'

const useAuth = (isAuthInitialized) => {
  const getAuthState = () => {
    const user = auth.currentUser;

    return {
      isInitializing: !user,
      user
    };
  };

  const auth = getAuth();
  const state = getAuthState();

  if (!isAuthInitialized) {
    onAuthStateChanged(auth, user => {

      state.isInitializing = false;
      state.user = user;

      new App(true);
    });
  }

  return state;
};

export default useAuth;
