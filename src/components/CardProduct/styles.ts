import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Container = styled.div`
  background: ${mixins.colors.background};
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  margin: 5rem;
  max-width: 1223px;
  max-height: 752px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Grid = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
`
export const Card = styled.button`
  max-width: 21.1rem;
  border: solid 2px;
  border-color:${mixins.colors.secondary}; 
  background: ${mixins.colors.background};
  border-radius: 1.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    max-width: 9.1rem;
  }

  h2 {
    color: ${mixins.colors.secondary};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .descriptions {
    margin-left: 1.2rem;
    margin-top: 0.2rem;
    padding: 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${mixins.colors.secondary};
  }

  .values {
    padding: 0;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .cifr {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: ${mixins.colors.secondary};
      margin-top: 1.5rem;
    }

    .value {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: ${mixins.colors.secondary};
    }

    .valuesec {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: ${mixins.colors.secondary};
      margin-top: 0.5rem;
    }
  }

`
export const CardImg = styled.img`
  position: absolute;
  width: 146px;
  height: 136px;
  left: 915px;
  top: 343px;
`
export const Pag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .page {
    
    display: flex;
    align-items: baseline;

    a {
      text-decoration: none;
      color: ${mixins.colors.secondary};
      font-size: 1rem;
      font-weight: 500;
      font-family: 'Poppins';

      & + a {
        margin-left: 5rem;
      }
    }
  }
`