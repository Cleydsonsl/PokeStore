import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { UserProvider } from './contextApi/UserProvider';
import { AuthProvider } from './contextApi/AuthProvider';

Modal.setAppElement('#root')

export function App() { 
  

  return (
    <BrowserRouter>
    <AuthProvider>
    <UserProvider>
    
      <Header 
          onOpenNewRegisterModal={handleOpenNewRegisterModal}
          onOpenLoginModal={handleOpenLoginModal}
        />
        <NewRegisterModal
          isOpen={isNewRegisterModalOpen}
          onRequestClose={handleCloseNewRegisterModal}
        />
        <ModalLogin 
          isOpen={isLoginModalOpen}
          onRequestClose={handleCloseLoginModal}
        />
      <Routes />
      <GlobalStyle />
    </UserProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}