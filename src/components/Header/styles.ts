import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
import Lupa from '../../assets/lupa.svg';

export const Container = styled.header`
  background: ${mixins.colors.primary};
`;

export const Content = styled.div`
  max-width: 1280px;
  height: 168px;
  margin: 0 auto;

  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img { 
    max-height: 114px;
  }
`;

export const User = styled.div`
  background: ${mixins.colors.secondary};
  max-width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;

  .search {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1280px;
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

    .user {
      padding: 0;
      margin: 0;
      margin-left: 20rem;
      display: block;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 0.9rem;

      .FaUser {
        color: ${mixins.colors.white};
        width: 20px;
      }

      color: ${mixins.colors.background}

    }

    .car {
      padding: 0;
      margin: 0;
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
  }
`;
