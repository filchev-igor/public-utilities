import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from '../../components/FloatingLabel';
import ErrorMessage from '../../components/ErrorMessage';
import { ROLES } from '../../constants/roles';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSignup = () => {
    const auth = getAuth();

    if (!email.length || !password.length) return;

    if (password !== passwordRepeat) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await sendEmailVerification(userCredential.user);

        try {
          const obj = {
            role: ROLES.USER,
            name: {
              first: '',
              last: '',
            },
            addressesNumber: 0,
            dates: {
              created: new Date(),
            },
          };

          const db = getFirestore();

          await setDoc(doc(db, 'users', userCredential.user.uid), obj);
        }
        // eslint-disable-next-line no-empty
        catch (err) {}
      })
      .then(() => {
        setEmail('');
        setPassword('');
        setPasswordRepeat('');

        navigate('/');
      })
      .catch((err) => setError(err));
  };

  const emailProps = {
    type: 'email',
    placeholder: 'E-mail',
    value: email,
    onChange: setEmail,
  };

  const passwordProps = {
    type: 'email',
    placeholder: 'E-mail',
    value: email,
    onChange: setPassword,
  };

  const passwordRepeatProps = {
    type: 'email',
    placeholder: 'E-mail',
    value: email,
    onChange: setPasswordRepeat,
  };

  return (
    <div className="container-fluid usual-pages background">
      <div className="row vh-100">
        <div className="login-window col-10 col-md-6 col-lg-4 p-4 text-center mx-auto my-auto">
          <FloatingLabel {...emailProps} />

          <FloatingLabel {...passwordProps} />

          <FloatingLabel {...passwordRepeatProps} />

          <button type="button" className="btn btn-outline-light" onClick={handleSignup}>Sign up</button>

          <a href="/login" className="link-info d-block">I have account</a>

          {error?.code && ErrorMessage(error)}
        </div>
      </div>
    </div>
  );
};

export default Signup;
