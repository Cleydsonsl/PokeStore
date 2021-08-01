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
  grid-template-columns: repeat(auto-fill, 
                         minmax(11.5rem, 1fr));
  grid-gap: 30px;
   
  @media (max-width: 90%) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(1.7rem, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;

  img {
    max-width: 12rem;
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
`;
   
export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
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
