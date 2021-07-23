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
export const CardContainer = styled.div`
    margin: 150px 0;
    width: 215px;
    height: 338px;
    border: solid 2px;
    border-color:${mixins.colors.secondary}; 
    background: ${mixins.colors.background};
    display: inline-block;
    align-self: center;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 50px;

    `
 export const CardImg = styled.img`
    position: absolute;
    width: 146px;
    height: 136px;
    left: 915px;
    top: 343px;
    `
 export const Pag = styled.div`
    :root {
  --primary: #FFCB05;
  --greyLight: #23adade1;
  --greyLight-2: #5F5F5F;
  --greyDark: ##CCCCCC;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px    100% = 16px
  overflow-y: scroll;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.6px;
  line-height: 1.4;
  -webkit-user-select: none;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--greyLight-2);
  color: var(--greyDark);
}

ul {
  list-style-type: none;
}

.items-list {
  max-width: 90vw;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  justify-content: center;
  align-content: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--greyDark);
  cursor: pointer;

  span {
    background: #ffffff;
    box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
    border-radius: 0.6rem;
    padding: 2rem;
    font-size: 3rem;
    transition: all 0.3s ease;
  }

  &:hover {
    span {
      transform: scale(1.2);
      color: var(--primary);
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: var(--greyLight);
  }
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);

  &__numbers,
  &__btn,
  &__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
  }

  &__dots {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--greyLight);
    cursor: initial;
  }

  &__numbers {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 0.4rem;

    &:hover {
      color: var(--primary);
    }

    &.active {
      color: #ffffff;
      background: var(--primary);
      font-weight: 600;
      border: 1px solid var(--primary);
    }
  }

  &__btn {
    color: var(--greyLight);
    pointer-events: none;

    &.active {
      color: var(--greyDark);
      pointer-events: initial;

      &:hover {
        color: var(--primary);
      }
    }
  }
}

 
 
 `   

export const TextMatCard = styled.div`
    
    margin: 5% 0;
    width: 90%;
    align-items: center;
    color: ${mixins.colors.secondary};
    flex-direction: column;
    justify-content: center;
    padding: none;
    
´

    .h1 {
        height: 100px;
        display: flex;
        flex-direction: column;
        color: ${mixins.colors.primary};
        font-family: ${mixins.fonts.bold};
        text-align: center;
        
    }
`
