 import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
    </BrowserRouter>
  );
}