import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
import {GlobalStyle} from '../../styles/global'

export const Container = styled.div`
  background: ${mixins.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  color: white;
  margin-top: 50px;
  width: 1200px;
  height: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${mixins.colors.secondary};
  border-radius: 15px;
  padding: 25px;

  @media (max-width: 900px){
    flex-direction: column;
    height: auto;
  }
 
`;

export const LeftColumn = styled.div`
  width: 21.5rem;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px){
  width: 31rem;
  }
`;

export const RightColumn = styled.div`
  width: 31rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px){
    width: 31rem;
    margin-top: 40px;
  }
`;

export const AvatarName = styled.div`
  justify-content: space-between;
  align-items: center;
  display: inline-flex;

  p{
    font-size: xx-large;
  }

  h1{
    font-size: xx-large;
    margin-left: 15px;      
  }

  img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 30px;   
  }
`;

export const Password = styled.div`
  justify-content: space-between;
  align-items: center;
  display: table-column;

  h6{
    font-size: small;
  }
`;

/*export const ContentData = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-end;
`;*/

export const WhiteBox = styled.div`
  background-color: white;
  margin: 30px 0 0 30px;
  padding: 24px 0 20px 35px;
  width: 21.5rem;
  height: 470px;
  border-radius: 15px;
  justify-content: space-around;

  p{
    font-size: xx-large;
    justify-content: space-around;
    color: ${mixins.colors.secondary};
  }

  @media (max-width: 900px){
  width: 28rem;
  margin: 30px 0 0 0;
  }
`;

export const Line = styled.div`
  display: inline-block;
  border-top: 2px solid darkblue;
  margin: 18px 0 18px 0;
  width: 17rem;

  @media (max-width: 900px){
  width: 21rem;
  }
`;

export const BlueBox = styled.div`
  width: 31rem;
  height: 480px;
  justify-content: space-around;

  p{
    font-size: xx-large;
    justify-content: space-around;
    color: gray;
  }

  input{
    width: 19rem;
    height: 40px;
    border: 2px gray;

  ::placeholder {
  color: gray;
  opacity: 1;
  background-color: ${mixins.colors.secondary};
  font-size: xx-large;
  padding: 10px;
}
  }
`;

export const GrayLine = styled.div`
  display: inline-block;
  border-top: 2px solid gray;
  margin: 18px 0 18px 0;
  width: 28rem;
`;

export const VerticalLine = styled.div`
  display: flex;  
  border-left: 4px solid white;
  margin: 20px;
  height: 470px;

  @media (max-width: 900px){
  border-left: 0;
  margin: 0;
  height: 0;
  }
`;

export const DadosPessoais = styled.button`
  display: flex;  
  color: ${mixins.colors.secondary};
  background-color: white;
  width: 28rem;
  height: 100px;
  margin: 0 0 50px 0;
  border-radius: 15px;
  border: none;
  font-size: x-large;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Salvar = styled.button`
  display: flex;  
  color: ${mixins.colors.secondary};
  background-color: ${mixins.colors.primary};
  width: 28rem;
  height: 65px;
  margin: 35px 0 0 0;
  padding: 10px;
  border-radius: 15px;
  border: none;
  font-size: large;
  align-items: center;
  justify-content: center;
`;