import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() { 
  

  return (
    <BrowserRouter>
      <Header/>
        
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  
  );
}