import { styled } from "styled-components";


export const ProductsWrapper = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const Article = styled.article`
  cursor: pointer;
  background-color: var(--dark-background-contrast);
  width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 0.7em;

  & img {
    width: 150px;
    height: 150px;
  }

  & h3 {
    font-style: italic;
  }

  & p {
    width: 90%;
    text-align: left;
  }

  .italic {
    font-style: italic;
  }

  @media (max-width: 500px) {
    width: 180px;
    max-height: 300px;
  }
`;

export const ButtonConteiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & .add {
    background-color: var(--dark-red);
  }
`;

export const Button = styled.button`
  background-color: var(--blue);
  font-size: 0.8em;
  font-weight: 600;
  color: var(--dark-font-color);
`;
