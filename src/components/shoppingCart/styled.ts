import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Container = styled.div`
  margin: 50px;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 54px;
  color: ${mixins.colors.secondary};
`

export const Content = styled.div`
  background: ${mixins.colors.white};
  grid-template-columns: auto auto auto auto auto;
  align-self: center;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 0.5rem;
  border-color: ${mixins.colors.secondary}; 
  border: 2px solid ${mixins.colors.secondary};
  box-sizing: border-box;

    table {
      width: 100%;
      text-align: center;

      .qtdProduct {
        display: flex;
        align-items: center;
        justify-content: center;

        .btni {
          border: none;
          margin-right: 0.5rem;
        }
        .btnd {
          border: none;
          margin-left: 0.5rem;
        }
      }
      
      .btnRemove{
        border: 0.2rem solid ${mixins.colors.secondary};
        border-radius: 0.5rem;
        width: 3rem;
        height: 3rem;

        .iconRemove{
          color: ${mixins.colors.secondary};
        }
      }

      h3 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: ${mixins.colors.secondary};
      }

      p {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 24px;
        color: ${mixins.colors.secondary};
      }

      input {
        width: 78px;
        height: 58px;
        text-align: center;
        background: #DFDDDD;
        font-size: 20px;
        color: #004278;
        border-radius: 10px;
        border-color: #004278; 
        border: 0.2rem solid #004278;
      }

      td {
        background: #F3F3F3;
        height: 110px;

      img {
        max-width: 5rem;

      }
      div {
        display: flex;

      }
    }
  }
`

export const ContainerCepCompra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
`


export const DivCompra = styled.div`

  width: 550px;
  height: 125px;
  border-radius: 10px;
  border-color: #004278; 
  border: 2px solid #004278;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h3{
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 27px;
    color: #004278;
    margin-right: 1rem;
    
  }

  button{
    border: none;
    width: 240px;
    height: 55px;
    background: #05D733;
    border-radius: 0.5rem;
    font-size: 16px;
    text-align: center;
    color: ${mixins.colors.white};
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    
  }
`

export const ButtonPrimario = styled.button`
  border: none;
  width: 250px;
  height: 55px;
  background: #004278;
  border-radius: 0.5rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  color: ${mixins.colors.white};
     
`
export const ButtonSecundario = styled.button`
  width: 250px;
  height: 55px;
  background: ${mixins.colors.background};
  border: 2px solid #004278;
  border-radius: 0.5rem;
  margin: 25px;
  font-family: Poppins;
  font-weight: 700;
  font-size: 1rem;
  
  color: ${mixins.colors.secondary};
      
`
export const Total = styled.div`
  display: flex;
  align-items: baseline;  

  span {
    color: ${mixins.colors.background};
    font-weight: bold;
  }
  
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;