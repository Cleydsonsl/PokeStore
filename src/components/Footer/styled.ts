import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
   
export const Container = styled.footer`
  margin-top: 3rem;
  padding: 2rem;
  background: ${mixins.colors.secondary};
`;

export const Content = styled.div`  
  justify-content: space-around;
  display: flex;
  grid-template-columns: fit-content;
  grid-gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 31rem;
    }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 35px;
  
  @media (min-width: 900px) {
    }

  img {
    width: 25rem;
    height: auto;
    margin-top: 30px;

   @media (min-width: 900px) {
    width: 12rem;
    height: auto;
    margin: 30px 0 30px 0;
    }
  }
`;
   
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  align-items: flex-start;
  vertical-align: middle;
   
  &:hover {
      color: ${mixins.colors.primary};
      transition: 200ms ease-in;
  }

  @media (max-width: 900px) {
    font-size: x-large;
    }
`;
   
export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: xx-large;
    }
`;

/*export const Social = styled.img`
  height: 20px;
  width: 20px;
  vertical-align: middle;
`;*/

export const Logo = styled.img`
  height: 57px;
  width: 166px;
  margin: 20px 0 0 0;

`;
