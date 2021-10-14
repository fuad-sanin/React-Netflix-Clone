import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  ButtonLink,
  Container,
  Logo,
 
} from "./styles/loggedheader";

export default function LoggedHeader({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

LoggedHeader.Frame = function LoggedHeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

LoggedHeader.ButtonLink = function LoggedHeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};



LoggedHeader.Logo = function LoggedHeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
