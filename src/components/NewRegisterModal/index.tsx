import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import { useCallback } from 'react';
import { userContext } from '../../contextApi/UserProvider';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import * as yup from "yup";

interface NewRegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Inputs {
  name: string,
  email: string,
  password: string,
  confirmedPassword: string
};

 let schema = yup.object().shape({
   name: yup.string().required('Nome é Obrigatório'),
   email: yup.string().email('Informe um email Válido').required('E-mail é Obrigatório'),
   password: yup.string().required('Senha é Obrigatório'),
   confirmedPassword: yup.string().required('Confirmar a senha é Obrigatório')
 });

export function NewRegisterModal({isOpen, onRequestClose}: NewRegisterModalProps) {
  const { createRegister } = useContext(userContext);

   const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
     resolver: yupResolver(schema)
   });

   async function onSubmit(data: Inputs) {
    console.log(data)
    if(data.password != data.confirmedPassword) return
    await createRegister(data)

  };

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
      <Container onSubmit={handleSubmit(onSubmit)}>
     
        <h2>Crie sua conta</h2>

        <input placeholder="Nome" {...register("name")}/>
        <p>{errors.name?.message}</p> 

        <input placeholder="E-mail" {...register("email")} />
        <p>{errors.email?.message}</p> 

        <input type="password" placeholder="Senha" {...register("password")}/>
         <p>{errors.password?.message}</p>
         
        <input type="password" placeholder="Confirme sua senha" {...register("confirmedPassword")}/>
         <p>{errors.confirmedPassword?.message}</p>

        <div>
          <p>Ao se registrar, você aceita nossos <a href="">termos de uso </a> e </p>
          <p>a nossa  <a href="">política de privacidade</a> </p>
        </div>
        

        <button type="submit">CADASTRAR</button>
      </Container>
    </Modal>
  )
}