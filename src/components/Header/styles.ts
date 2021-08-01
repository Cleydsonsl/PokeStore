import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.header`
  background: ${mixins.colors.primary};
`;

export const Content = styled.div`
  max-width: 1280px;
  height: 168px;
  margin: 0 auto;

  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img { 
    max-height: 114px;
  }
`;


