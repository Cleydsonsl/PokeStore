import { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { ModalLogin } from './components/ModalLogin';
import { NewRegisterModal } from './components/NewRegisterModal';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contextApi/AuthProvider';
import { UserProvider } from './contextApi/UserProvider';

Modal.setAppElement('#root')

export function App() { 
  const [ isNewRegisterModalOpen, setIsNewRegisterModalOpen ] = useState(false);
  const [ isLoginModalOpen, setIsLoginModalOpen ] = useState(false);

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModalOpen(true);
  }

  function handleCloseNewRegisterModal() {
    setIsNewRegisterModalOpen(false);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

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