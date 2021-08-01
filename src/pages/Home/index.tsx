import { useState } from 'react';
import { CardProduct } from '../../components/CardProduct';
import { Footer } from '../../components/Footer';
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
      <CardProduct 
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
      <Footer />
    </>
  );
}