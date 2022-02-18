import React from 'react';
import 'material-icons/iconfont/filled.scss';
import 'material-icons/iconfont/outlined.scss';
import 'bootstrap/scss/bootstrap.scss';
import { initializeApp } from 'firebase/app';
import { Route, Routes } from 'react-router-dom';
import AmountOfConsumed from './app/pages/AmountOfConsumed';
import {
  AMOUNTS_OF_CONSUMED_EN,
  BILLS_EN, BILLS_LT,
  CONTACTS_EN, CONTACTS_LT,
  CONTENT_ADDING_EN, CONTENT_ADDING_LT,
  LOGIN_EN,
  LOGIN_LT,
  SETTINGS_EN, SETTINGS_LT,
  SIGN_UP_EN,
  SIGN_UP_LT,
} from './app/constants/navbar';
import Bills from './app/pages/Bills';
import Settings from './app/pages/Settings';
import NewsAndMessages from './app/pages/NewsAndMessages';
import Contacts from './app/pages/Contacts';
import ContentAdding from './app/pages/ContentAdding';
import Page404 from './app/pages/Page404';
import { FIREBASE_CONFIG } from './app/constants/firebase';
import useAuth from './app/hooks/useAuth';
import Login from './app/pages/Login';
import Signup from './app/pages/Signup';

const App = () => {
  initializeApp(FIREBASE_CONFIG);

  const { isInitializing, user } = useAuth();

  if (isInitializing) return null;

  if (user) {
    return (
      <Routes>
        <Route index element={<NewsAndMessages />} />
        <Route path={SETTINGS_EN || SETTINGS_LT} element={<Settings />} />
        <Route path={BILLS_EN || BILLS_LT} element={<Bills />} />
        <Route path={CONTACTS_EN || CONTACTS_LT} element={<Contacts />} />
        <Route path={AMOUNTS_OF_CONSUMED_EN} element={<AmountOfConsumed />} />
        <Route path={CONTENT_ADDING_EN || CONTENT_ADDING_LT} element={<ContentAdding />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={LOGIN_EN || LOGIN_LT} element={<Login />} />
      <Route path={SIGN_UP_EN || SIGN_UP_LT} element={<Signup />} />
    </Routes>
  );
};

export default App;
