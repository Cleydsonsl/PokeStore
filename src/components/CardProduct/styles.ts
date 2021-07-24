import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const ContainerMD = styled.div`
    margin: 150px 0;
    max-width: 1223px;
    max-height: 752px;
    background: ${mixins.colors.background};
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-self: center;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    padding: 50px;
`
export const CardContainer = styled.button`
      max-height: 350px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 30px;
      margin-top: 0px ;
      text-align: center;
      border-radius: 10px;
      border-color: #004278; 
      border: 2px solid #004278;
      box-sizing: border-box;
      background-color: #FFFFFF;
      img{
        max-width: 170px;
      }

      h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        color: #004278;
        text-align: center;
      }
      
      h2{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        color: #004278;
        margin-top:0px ;
        text-align: center;
      }

      div{ 
        display: flex;
        flex-direction: column;
        align-items: left;
        p{
          align-items: left;
          justify-content: center;
          flex-direction:column;
          text-align: left;
          margin-left: 5%;
          margin-top: 0px;
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 10px;
          line-height: 18px;
          color: #004278;
        }
      }

    `

//  export const CardImg = styled.img`
//     position: absolute;
//     width: 146px;
//     height: 136px;
//     left: 915px;
//     top: 343px;
//     `

