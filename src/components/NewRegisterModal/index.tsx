import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';

interface NewRegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRegisterModal({isOpen, onRequestClose}: NewRegisterModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className="btnClose" 
        type="button" 
        onClick={onRequestClose}
      >
        <GrClose 
          className="iconClose" 
        />
      </button>
      <Container>
        <h2>Crie sua conta</h2>

        <input placeholder="Nome"/>
        <input placeholder="E-mail"/>
        <input type="password" placeholder="Senha"/>
        <input type="password" placeholder="Confirme sua senha"/>

        <div>
          <p>Ao se registrar, você aceita nossos <a href="">termos de uso </a> e </p>
          <p>a nossa  <a href="">política de privacidade</a> </p>
        </div>
        

        <button type="submit">CADASTRAR</button>
      </Container>
    </Modal>
  )
}