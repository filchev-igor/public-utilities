import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOG_OUT_BUTTON_EN, LOG_OUT_BUTTON_LT } from '../../constants/navbar';
import useLithuanian from '../../utils/useLithuanian';

const LogOutButton = async () => {
  const { isLithuanian } = await useLithuanian();
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      navigate('/');
    });
  };

  return (
    <button type="button" className="btn btn-outline-danger text-uppercase" onClick={handleLogout}>
      {isLithuanian ? LOG_OUT_BUTTON_LT : LOG_OUT_BUTTON_EN}
    </button>
  );
};

export default LogOutButton;
