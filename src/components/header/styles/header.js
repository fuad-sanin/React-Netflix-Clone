import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 50px;
  height: fit-content;
  color: white;
  border: 0;
  padding: 7px 17px;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`;
export const ButtonLang = styled.button`
  display: block;
  background-color: transparent;
  width: 100px;
  height: fit-content;
  color: white;
  border: 0;
  padding: 8px 17px;
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid #aaa;
  margin-left: 66%;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1320px) {
    margin-left: 0;
  }
`;
