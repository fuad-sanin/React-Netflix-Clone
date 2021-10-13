import styled from "styled-components/macro";

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
