import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { Header } from "./components/Header";
import { NewRegisterModal } from './components/NewRegisterModal';

export function App() {  
  const [ isNewRegisterModalOpen, setIsNewRegisterModalOpen ] = useState(false);

  function handleOpenNewRegisterModal() {
    setIsNewRegisterModalOpen(true);
  }

  function handleCloseNewRegisterModal() {
    setIsNewRegisterModalOpen(false);
  }

  return (
    <BrowserRouter>
      <Routes />
      <Header onOpenNewRegisterModal={handleOpenNewRegisterModal}/>
      <NewRegisterModal 
        isOpen={isNewRegisterModalOpen}
        onRequestClose={handleCloseNewRegisterModal}
      />
      <GlobalStyle />
    </BrowserRouter>
  );
}
