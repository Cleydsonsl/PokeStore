import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import { useContext } from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contextApi/AuthProvider';
import * as yup from 'yup';

type Inputs = {
  email: string,
  password: string
};

let schema = yup.object().shape({
  email: yup.string().email('Informe um email válido').required('Login é obrigatório'),
  password: yup.string().min(8).required('Senha é obrigatório')
});

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalLogin({isOpen, onRequestClose}: LoginModalProps) {
  const { signIn } = useContext(AuthContext);

  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  
  async function onSubmit(data: Inputs) {
    console.log(data)
    await signIn(data);
    history.push("/home")
   
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
        <h2>Faça seu login</h2>
        
      
          <input placeholder="Digite seu email" {...register("email")}/>
          <p>{errors.email && <span>{errors.email.message}</span>}</p>

          <input type="password" placeholder="Digite sua senha" {...register("password")}/>
          <p>{errors.password && <span>{errors.password.message}</span>}</p>

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