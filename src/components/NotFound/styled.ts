import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
   
export const Container = styled.footer`
  margin-top: 3rem;
  padding: 2rem;
`;

export const Content = styled.div`  
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;

  img{
    height: 198px;
  width: 355px;
  margin: 20px 0 0 0;
  }
`;

export const Voltar = styled.button`
  display: flex;  
  color: ${mixins.colors.secondary};
  background-color: ${mixins.colors.primary};
  width: 21rem;
  height: 65px;
  margin: 15px 0 0 0;
  padding: 10px;
  border-radius: 15px;
  border: none;
  font-size: medium;
  align-items: center;
  justify-content: center;
  :hover{
    filter: brightness(0.9);
    transition: filter 0.2s;
  }
`;
