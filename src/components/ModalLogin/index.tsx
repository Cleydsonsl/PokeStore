import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import React, {useMemo} from 'react';
import { validationSchema } from './validation'
import { SignInCredentials, useAuth } from '../../hooks/context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Form, useFormik } from 'formik'
import { useForm, SubmitHandler } from "react-hook-form";
import { Styled } from './styles';


interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalLogin({isOpen, onRequestClose}: LoginModalProps) {
  const {signIn, error} = useAuth();  
  const history = useHistory()
  const formik = useFormik({
        initialValues: {
        login: '',
        password: '',
        },
        validationSchema,
        onSubmit: async values => {
          await signIn({login: values.login, password: values.password});
          history.push("/home")
        },
    });
    const AppError = useMemo(() =>  <Styled.Error>{error}</Styled.Error>,[error])
    const ValidationLoginError = useMemo(() =>  <Styled.Error>{formik.errors.login}</Styled.Error>,[formik.errors.login])
    const ValidationPasswordError = useMemo(() =>  <Styled.Error>{formik.errors.password}</Styled.Error>,[formik.errors.password])
    
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
        
        <Form onSubmit= {formik.handleSubmit}>
        <input placeholder="Nome"/>
        <Form
              id="login"
              name="login"
              onChange={formik.handleChange}
             
         />
            {ValidationLoginError}
        <input type="password" placeholder="Senha"/>

        <div className="senha">
        <Form 
                id="password"
                name="password"                       
                onChange={formik.handleChange}
               
               
          />
            {ValidationPasswordError}
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