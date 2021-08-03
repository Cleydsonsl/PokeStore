import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  background: ${mixins.colors.background};
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 50px;
  width: 1200px;
  height: 720px;
  background: ${mixins.colors.secondary};
`;