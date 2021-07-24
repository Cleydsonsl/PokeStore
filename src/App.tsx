import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { CardProduct } from '../src/components/CardProduct'

export function App() {
  return (
    <div>
      <CardProduct />

    </div>
  );
}
