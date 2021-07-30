import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Title = styled.h1`
   font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: #004278;
  margin-left: 12%;
`

export const Container = styled.div`
    margin:20px;
    height: 500px;
    background: white;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-self: center;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 10px;
      border-color: #004278; 
      border: 3px solid #004278;
      box-sizing: border-box;
`
export const CartContainer = styled.div`
     
      
`
export const ContainerCepCompra = styled.div`
   display: flex;
`


export const DivCep = styled.div`
    margin: 20px;
    width: 600px;
    height: 125px;
    background: white;
    border-radius: 10px;
    border-color: #004278; 
    border: 3px solid #004278;
    box-sizing: border-box;
    text-align: center;

    p{
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      color: #004278;
      padding: 25px;
    }

    input{
      width: 400px;
      height: 30px;
      border: 2px solid #004278;
      box-sizing: border-box;
      border-radius: 5px;
      border: 3px solid #004278;
    }
`
export const DivCompra = styled.div`
    margin: 20px;
    
    width: 600px;
    height: 125px;
    background: white;
    border-radius: 10px;
    border-color: #004278; 
    border: 3px solid #004278;
    box-sizing: border-box;
    text-align: center;
    display: flex;

    p{
      margin-top: 20px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      color: #004278;
      padding: 25px;
    }

    button{
      margin-top: 20px;
      width: 250px;
      height: 70px;
      background: #05D733;
      border-radius: 10px;
      font-size: 22px;
      line-height: 33px;
      text-align: center;
      color: #F3F3F3;
      
    }
`

export const ButtonPrimario = styled.button`
        width: 280px;
        height: 80px;
        background: #004278;
        border-radius: 10px;
        margin: 15px;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 33px;
        color: #FFFFFF;
     
`
export const ButtonSecundario = styled.button`
        width: 280px;
        height: 80px;
        background: #F3F3F3;
        border: 2px solid #004278;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 15px;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 33px;
        color: #004278;
      
`