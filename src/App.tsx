import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contextApi/AuthProvider';
import { UserProvider } from './contextApi/UserProvider';

Modal.setAppElement('#root')

export function App() { 
  
  return (
    <BrowserRouter>
    <AuthProvider>
    <UserProvider>
    
      <Header />
        
      <Routes />
      <GlobalStyle />
    </UserProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}