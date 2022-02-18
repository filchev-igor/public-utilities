import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import App from '../../index';

const useAuth = () => {
  const auth = getAuth();

  const [state, setState] = useState(() => {
    const user = auth.currentUser;

    return {
      isInitializing: !user,
      user,
    };
  });

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => setState({
      isInitializing: false,
      user,
    }));

    return () => observer();
  }, []);

  return state;
};

export default useAuth;
