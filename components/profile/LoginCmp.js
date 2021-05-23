import React, { useEffect, useState } from 'react';
import { LOGIN_TYPE_LS } from '../../src/utils/consts';
import { Case, Switch } from '../common/Switch';
import Logosvg from '../svg/Logo';
import LoginWithMail from './login/LoginWithMail';
import LoginWithPassword from './login/LoginWithPassword';
import LoginWithPhone from './login/LoginWithPhone';

export default function LoginCmp() {
  const [loginType, setLoginType] = useState();
  useEffect(() => {
    setLoginType(localStorage.getItem(LOGIN_TYPE_LS) || 'email');
  }, []);
  const changeLoginType = (type) => {
    localStorage.setItem(LOGIN_TYPE_LS, type);
    setLoginType(type);
  };
  return (
    <section className="flex flex-col  h-full">
      <div className="mb-16">
        <Logosvg />
      </div>
      <Switch test={loginType}>
        <Case value="password">
          <LoginWithPassword />
        </Case>
        <Case value="email">
          <LoginWithMail />
        </Case>
        <Case value="phone">
          <LoginWithPhone />
        </Case>
      </Switch>
      <p className="text-center mt-4">נתקלת בבעיה? 03-6450072</p>
      <div className="mt-auto mx-auto text-center">
        {'phone' !== loginType && (
          <button
            className="block underline mx-auto"
            type="button"
            onClick={() => changeLoginType('phone')}
          >
            אני מעוניין/ת לקבל קוד לנייד
          </button>
        )}
        {'email' !== loginType && (
          <button
            className="block underline mx-auto"
            type="button"
            onClick={() => changeLoginType('email')}
          >
            אני מעוניין/ת לקבל קוד למייל
          </button>
        )}
        {'password' !== loginType && (
          <button
            className="block underline mx-auto"
            type="button"
            onClick={() => changeLoginType('password')}
          >
            התחברות עם סיסמא
          </button>
        )}
        <a>
          <span>עדיין לא רשום/ה?</span>
          <strong>התחל/י כאן</strong>
        </a>
      </div>
    </section>
  );
}