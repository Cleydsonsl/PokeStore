import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from '../../components/Header';
import { CardProduct } from '../../components/CardProduct'
import { Footer } from '../../components/Footer';
import { NewRegisterModal } from '../../components/NewRegisterModal';
import { ModalLogin } from '../../components/ModalLogin';

Modal.setAppElement('#root')

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
      <CardProduct />
      <Footer />
    </>
  );
}