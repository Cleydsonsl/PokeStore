import { useState } from 'react';
import { CardProduct } from '../../components/CardProduct';
import { Footer } from '../../components/Footer';
import { HeaderFalse } from '../../components/HeaderFalse';
import { ModalLogin } from '../../components/ModalLogin';
import { NewRegisterModal } from '../../components/NewRegisterModal';

export function Home() {
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
    <>
      <HeaderFalse 
        onOpenNewRegisterModal={handleOpenNewRegisterModal}
        onOpenLoginModal={handleOpenLoginModal}
      />
      <CardProduct/>
      <NewRegisterModal
        isOpen={isNewRegisterModalOpen}
        onRequestClose={handleCloseNewRegisterModal}
      />
      <ModalLogin 
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
      <Footer />
    </>
  );
}