import { useState } from 'react';
import { Container, Content, User } from './styles';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import logoImg from '../../assets/logo2.png';
import { ModalLogin } from '../ModalLogin';

interface HeaderProps {
  onOpenNewRegisterModal: () => void;
  onOpenLoginModal: () => void;
}

export function Header({ onOpenNewRegisterModal, onOpenLoginModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="PokéStore" />
      </Content>
      <User>
        <div className="search">
          <label>
            <input type="text" placeholder="Pesquisar" />
          </label>
          
          <div className="user">
            <FaUser className="FaUser"/> Faça seu <button type="button" 
              onClick={onOpenLoginModal}
            >
              Login
            </button> ou <button type="button" onClick={onOpenNewRegisterModal}>
              Cadastre-se
            </button>
          </div>

          <div className="car">
            <FaShoppingCart /> Seu carrinho tem <a href="#">0</a> produtos
          </div>
        </div>
        
      </User>
    </Container>
  )
}