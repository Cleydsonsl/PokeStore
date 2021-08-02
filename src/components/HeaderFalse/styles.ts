import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
import Lupa from '../../assets/lupa.svg';


export const User = styled.div`
background: ${mixins.colors.secondary};
width: 100%;
height: 58px;
display: flex;
align-items: center;
justify-content: space-around;

@media(max-width: 1080px) {
  height: 116px;
}
@media(max-width: 750px) {
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.blue {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1350px;

  @media(max-width: 1350px) {
    width: 1000px;
  }
  @media(max-width: 1080px) {
    width: 610px;
  }
  @media(max-width: 750px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  
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
      width: 22rem;
      padding: 0.7rem 1rem 0.7rem 3rem;
      border-radius: 5px;
      border: 0;
      background: ${mixins.colors.background};

      @media(max-width: 750px) {
        width: 22rem;
      }

      &::placeholder {
        color: ${mixins.colors.gray2};
      }
    }
  }

  .users{
    display: flex;
    align-items:center;
    justify-content: space-around;

    @media(max-width: 750px) {
      margin-top: 1rem;
      width: 23rem;
    }

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

    @media(max-width: 750px) {
      margin-left: 0;
    }

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