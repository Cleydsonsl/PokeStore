import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
// pagina
export function ModalLogin({isOpen, onRequestClose}: LoginModalProps) {
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
        <h2>Faça seu login</h2>

        <input placeholder="Nome"/>
        <input type="password" placeholder="Senha"/>

        <div className="senha">
          <p>Esqueci minha <a href="">senha</a></p>
        </div>

        <button type="submit">ENTRAR</button>

        <div className="register">
          <p>Não tem conta? <a href="">Registre-se</a></p>
        </div>
      </Container>
    </Modal>
  )
}