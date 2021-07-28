import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { api } from './services/api';
import { GlobalStyle } from './styles/global';

export function App() {  

  useEffect(() => {
    api.get('pokemon/19').then((response) => { console.log(response.data)});
  }, []);
  
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  
  );
}