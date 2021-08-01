import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from '../../components/Header';
import { ShoppingCart } from '../../components/shoppingCart'
import { Footer } from '../../components/Footer';
import { NewRegisterModal } from '../../components/NewRegisterModal';
import { ModalLogin } from '../../components/ModalLogin';

Modal.setAppElement('#root')

export function Cart() {
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
      <ShoppingCart />
      <Footer />
    </>
  );
}