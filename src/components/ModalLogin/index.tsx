import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import React, {useMemo} from 'react';
import { validationSchema } from './validation'
import { useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Form, useFormik } from 'formik'

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalLogin({isOpen, onRequestClose}: LoginModalProps) {
  const  signIn  = useAuth();
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
        },
        validationSchema,
        onSubmit: async values => {
          await {signIn: (values)};
          history.push("/home")
        },
    });
    
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
        
        <Form onSubmit={formik.handleSubmit}>
        <input placeholder="Nome"/>
        <Form
                    id="login"
                    name="login"
                    onChange={formik.handleChange}
                    
        />
        <input type="password" placeholder="Senha"/>

        <div className="senha">
        <Form 
                    id="password"
                    name="password"                       
                    onChange={formik.handleChange}
                    
          />
          <p>Esqueci minha <a href="">senha</a></p>
        </div>

        <button type="submit">ENTRAR</button>

        <div className="register">
          <p>Não tem conta? <a href="">Registre-se</a></p>
        </div>
        </Form>
      </Container>
    </Modal>
  )
}