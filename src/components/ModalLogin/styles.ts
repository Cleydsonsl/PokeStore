import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 { 
    color: ${mixins.colors.secondary};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  input {
    width: 19rem;
    height: 2.5rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${mixins.colors.background};
    background: ${mixins.colors.background};

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${mixins.colors.placeholder};
    }

    & + input {
      margin-top: 0.5rem;
    }
  }

  button[type="submit"] {
    width: 19rem;
    height: 2.5rem;
    padding: 0 1.5rem;
    background: ${mixins.colors.secondary};
    color: ${mixins.colors.primary};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;

    transition: filter 0.2s ;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .senha {
    
    flex-direction: column;
    align-items: left;
    justify-content: center;

      p {
      padding: 0;
      margin-top: 0.5rem;
      font-size: 0.7rem;
      font-weight: 500;
      color: ${mixins.colors.secondary};

      & + p {
        margin: 0;
      }

        a {
        color: ${mixins.colors.secondary};
        text-decoration: none;
        font-size: 0.7rem;
        font-weight: 700;

        & + a {
          margin: 0;
        }
      }
    }
  }

  .register {
    
    flex-direction: column;
    align-items: left;
    justify-content: center;

      p {
      padding: 0;
      margin-top: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: ${mixins.colors.secondary};

      & + p {
        margin: 0;
      }

        a {
        color: ${mixins.colors.secondary};
        text-decoration: none;
        font-size: 1rem;
        font-weight: 700;

        & + a {
          margin: 0;
        }
      }
    }
  }  
`;
export const Styled = {
  Error: styled.p`
      align-self: center;
      justify-self: center;
      
  `
}