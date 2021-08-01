import styled from 'styled-components';
import { mixins } from "../../styles/mixins"
import Lupa from '../../assets/lupa.svg';

export const Container = styled.div`
  margin: 0;
  background: ${mixins.colors.background};
  
  margin-bottom: 40px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1200px) {
    height: auto;
  }

  @media(max-width: 1080px) {
    height: auto;
  }
  @media(max-width: 750px) {
    height: auto;
  }
  @media(max-width: 500px) {
    height: auto;
  }
`

export const Grid = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(4, 20rem);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  
  @media(max-width: 1350px) {
    grid-template-columns: repeat(3, 20rem);
  }
  @media(max-width: 1080px) {
    grid-template-columns: repeat(2, 20rem);
  }
  @media(max-width: 750px) {
    grid-template-columns: repeat(1, 20rem);
  }
`;

export const Card = styled.button`
  max-width: 21.1rem;
  border: solid 2px;
  border-color:${mixins.colors.secondary}; 
  background: ${mixins.colors.background};
  border-radius: 1.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .img{
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    img {
      max-width: 8rem;
    }
  }

  

  h2 {
    color: ${mixins.colors.secondary};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .descriptions {
    margin-top: 0.2rem;
    padding: 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${mixins.colors.secondary};
  }

  .values {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .cifr {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: ${mixins.colors.secondary};
      margin-top: 1.5rem;
    }

    .value {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: ${mixins.colors.secondary};
    }

    .valuesec {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: ${mixins.colors.secondary};
      margin-top: 0.5rem;
    }
  }

`
export const Pag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  .page {
    
    display: flex;
    align-items: baseline;

    a {
      text-decoration: none;
      color: ${mixins.colors.secondary};
      font-size: 1rem;
      font-weight: 500;
      font-family: 'Poppins';

      & + a {
        margin-left: 5rem;
      }
    }
  }
`

export const User = styled.div`
  background: ${mixins.colors.secondary};
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .blue {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1350px;
    
    .div {
      display: flex;
      label {
        position: relative;
      }

      label:before {
        content: "";
        position: absolute;
        left: 1rem;
        top: 0.7rem;
        bottom: 0;
        width: 20px;
        background: url(${Lupa}) no-repeat;
      }

      input {
        width: 391px;
        padding: 0.7rem 1rem 0.7rem 3rem;
        border-radius: 5px;
        border: 0;
        background: ${mixins.colors.background};

        &::placeholder {
          color: ${mixins.colors.gray2};
        }
      }
    }

    .users{
      display: flex;
      .user {
      padding: 0;
      margin: 0;
      display: block;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 0.9rem;
      margin-left: 1rem;

      .FaUser {
        color: ${mixins.colors.white};
        width: 20px;
      }

      color: ${mixins.colors.background}

    }

    .car {
      padding: 0;
      margin-left: 1rem;
      color: ${mixins.colors.background};
      font-weight: 400;
      font-size: 0.9rem;
      align-items: center;

      .ShopCar {
        color: ${mixins.colors.white};
        width: 20px;
      }

    }
    a {
      color: ${mixins.colors.background};
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 700;
    }

    button {
      color: ${mixins.colors.background};
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 700;
      background: transparent;
      border: 0;
      padding: 0;
    }
    }

    
  }
`;