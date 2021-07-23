import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
   
export const Box = styled.div`
  padding: 20px 15px;
  background: ${mixins.colors.secondary};
  position: absolute;
  bottom: 0;
  width: 100%;
     
  @media (width: 95%) {
    padding: 40px 20px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center, space-between;
    width: 95%;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 30px;
   
  @media (max-width: 90%) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
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
