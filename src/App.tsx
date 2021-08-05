import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contextApi/AuthProvider';
import { UserProvider } from './contextApi/UserProvider';
import { CartProvider } from './hooks/useCart';


Modal.setAppElement('#root')

export function App() { 
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <CartProvider>
          
          
    
          <Header />
        
          <Routes />
          </CartProvider>          
        </UserProvider>
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}