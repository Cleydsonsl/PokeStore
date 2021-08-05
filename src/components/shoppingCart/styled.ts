import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Container = styled.div`
margin: 150px;
`

export const Title = styled.h1`
   font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 54px;
  color: #004278;
`

export const Content = styled.div`
    background: white;
    grid-template-columns: auto auto auto auto auto;
    align-self: center;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 10px;
    border-color: #004278; 
    border: 2px solid #004278;
    box-sizing: border-box;
      table{
        width: 100%;
        text-align: center;
        h3{
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 27px;
          color: #004278;
        }
        p{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            color: #004278;
          }
        input{
          width: 78px;
          height: 58px;
          text-align: center;
          background: #DFDDDD;
          font-size: 20px;
          color: #004278;
          border-radius: 10px;
          border-color: #004278; 
          border: 2px solid #004278;
        }
        td{
          background: #F3F3F3;
          height: 110px;
        img{
          width: 80px;
        }
        div{
          display: flex;
        }
          
      }
    }

`
export const CartContainer = styled.div`
     
      
`
export const ContainerCepCompra = styled.div`
   display: flex;
   margin-top: 45px;
`


export const DivCep = styled.div`
    
    width: 500px;
    height: 125px;
    background: white;
    border-radius: 10px;
    border-color: #004278; 
    border: 2px solid #004278;
    text-align: center;

    h3{
      font-size: 14px;
      color: #004278;
      margin: 15px;
    }

    input{
      width: 380px;
      height: 30px;
      border: 2px solid #004278;
      border-radius: 5px;
    }
`
export const DivCompra = styled.div`
    margin-left: 10%;
    width: 500px;
    height: 125px;
    background: white;
    border-radius: 10px;
    border-color: #004278; 
    border: 2px solid #004278;
    text-align: center;
    display: flex;

    h3{
      margin-top: 30px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      color: #004278;
      
    }

    button{
      margin: 20px;
      width: 240px;
      height: 55px;
      background: #05D733;
      border-radius: 10px;
      font-size: 16px;
      text-align: center;
      color: #F3F3F3;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      
    }
`

export const ButtonPrimario = styled.button`
        width: 250px;
        height: 55px;
        background: #004278;
        border-radius: 10px;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
     
`
export const ButtonSecundario = styled.button`
        width: 250px;
        height: 55px;
        background: #F3F3F3;
        border: 2px solid #004278;
        border-radius: 10px;
        margin: 25px;
        font-family: Poppins;
        font-weight: bold;
        font-size: 16px;
        
        color: #004278;
      
`
export const Total = styled.div`
        display: flex;
        align-items: baseline;  

        span {
          color: #999;
          font-weight: bold;
        }
        
        strong {
          font-size: 28px;
          margin-left: 5px;
        }
      `;