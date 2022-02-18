import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import FloatingLabel from '../../components/FloatingLabel';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth();

    if (!email.length || !password.length) return;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  const emailProps = {
    type: 'email',
    placeholder: 'E-mail',
    value: email,
    onChange: setEmail,
    isCreatingAccount: false,
  };

  const passwordProps = {
    type: 'email',
    placeholder: 'E-mail',
    value: email,
    onChange: setPassword,
    isCreatingAccount: false,
  };

  return (
    <div className="container-fluid usual-pages background container-fluid">
      <div className="row min-vh-100">
        <div className="login-window col-10 col-md-6 col-lg-4 p-4 text-center mx-auto my-auto">
          <FloatingLabel {...emailProps} />

          <FloatingLabel {...passwordProps} />

          <button type="button" className="btn btn-outline-light" onClick={handleLogin}>Log in</button>

          <a href="/sign-up" className="link-info d-block">Create new user</a>

          {error?.code && ErrorMessage(error)}
        </div>
      </div>
    </div>
  );
};

export default Login;
