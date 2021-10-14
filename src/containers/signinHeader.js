import React from 'react';
import { LoggedHeader } from '../loggedHome';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function LoggedHeaderContainer({ children }) {
  return (
    <LoggedHeader>
      <LoggedHeader.Frame>
        <LoggedHeader.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
       
        <LoggedHeader.ButtonLink to={ROUTES.SIGN_OUT}>Sign Out</LoggedHeader.ButtonLink>
      </LoggedHeader.Frame>
      {children}
    </LoggedHeader>
  );
}