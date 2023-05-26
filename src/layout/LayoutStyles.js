import { FaBars } from "react-icons/fa";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 70px;
`;

export const Title = styled.h2`
    & span {
        font-size: 10px;
    }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  & .openList {
        transform: translateX(0);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;

  @media (max-width: 500px) {
    z-index: 3;
    position: fixed;
    transform: translateX(100%);
    transition: transform 0.3s;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
  }
`;

export const Item = styled.li`
    @media (max-width: 500px) {
        height: 30px;
        background-color: var(--dark-background-contrast);
    }
`;

export const Button = styled(FaBars)`
  @media (min-width: 500px) {
    display: none;
  }

  color: white;
`;

export const FooterWrapper = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-bottom: 15px;
`

export const FooterLegend = styled.div`
`

export const FooterLinks = styled.div`
display: flex;
gap: 20px;
font-size: 20px;
color: white;
`