import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import React, {useCallback} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
  login: string,
  senha: string
};

let schema = yup.object().shape({
  login: yup.string().required('Login é obrigatório'),
  senha: yup.string().required('Senha é obrigatório')
});

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalLogin({isOpen, onRequestClose}: LoginModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit =  useCallback((data) => {
    console.log(data)
  }, []);
  

  return (
    <Modal 
      isOpen={true}
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
      <Container onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça seu login</h2>
        
      
          <input placeholder="Nome" {...register("login")}/>
          <p>{errors.login && <span>{errors.login.message}</span>}</p>

          <input type="password" placeholder="Senha" {...register("senha")}/>
          <p>{errors.senha && <span>{errors.senha.message}</span>}</p>

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