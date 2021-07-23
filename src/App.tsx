import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { Header } from "./components/Header";
import { NewRegisterModal } from './components/NewRegisterModal';
import { ModalLogin } from './components/ModalLogin';

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
      <Routes />
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
      <GlobalStyle />
    </BrowserRouter>
  );
}
