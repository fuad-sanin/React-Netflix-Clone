import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo } from "./styles/headersign";

export default function HeaderSign({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

HeaderSign.Frame = function HeaderSignFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

HeaderSign.Logo = function HeaderSignLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
