import { AvatarName, BlueBox, Container, Content, Password, DadosPessoais, GrayLine, LeftColumn, Line, RightColumn, Salvar, VerticalLine, WhiteBox } from './styles';
import Avatar from '../../assets/joy.jpg';
import * as yup from "yup";
import { useContext } from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contextApi/AuthProvider';
import { userContext } from '../../contextApi/UserProvider';



interface Inputs {
  id: number;
  password: string;
  name: string,
  sobrenome: string,
  email: string,
  cpf: string,
  datanascimento: string
};

let schema = yup.object().shape({
  name: yup.string().required('Nome é Obrigatório'),
  email: yup.string().email('Informe um email Válido').required('E-mail é Obrigatório'),
  sobrenome: yup.string().required('Digite seu sobrenome'),
  cpf: yup.number().min(11).required('Digite um CPF válido'),
  datanascimento: yup.string().required('Data Nascimento Obrigatório')

});


export function ProfileComponent() {
  const { updateRegisters } = useContext(userContext);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  async function onSubmit(data: Inputs) {
   
   await updateRegisters(data)

 };

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Content>
         <LeftColumn>
         <AvatarName>
            <img src={Avatar} alt="Profile_Avatar"/>            
            <Password>
            <p>Olá, <strong>Joy!</strong></p>
            <div>Alterar senha</div>
            </Password>         
          </AvatarName>
         <WhiteBox>
         <p>Dados Pessoais</p>
              <Line/>
              <p>Endereços</p>
              <Line/>
              <p>Pedidos</p>
              <Line/>
              <p>Cartões</p>
              <Line/>
              <p>Sair</p>
         </WhiteBox>
         </LeftColumn>
         <VerticalLine/>
         <RightColumn>
         <DadosPessoais><h1>Dados Pessoais</h1></DadosPessoais>
         <BlueBox>
              <input placeholder="Nome" {...register("name")}></input>
              <p>{errors.name?.message}</p>               
              <GrayLine/>
              <input placeholder="Sobrenome" {...register("sobrenome")}></input>
              <GrayLine/>
              <input placeholder="E-mail" {...register("email")}></input>
              <p>{errors.email?.message}</p> 
              <GrayLine/>
              <input placeholder="CPF" {...register("cpf")}></input>
              <GrayLine/>
              <input placeholder="Data Nascimento" {...register("datanascimento")}></input>
              <GrayLine/>
              <Salvar type = "submit"><h1>Salvar</h1></Salvar>
            </BlueBox>
         </RightColumn>
        </Content>        
      </Container>
    </>
  );
}