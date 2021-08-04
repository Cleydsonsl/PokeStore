import { AvatarName, BlueBox, Container, Content, Password, DadosPessoais, GrayLine, LeftColumn, Line, RightColumn, Salvar, VerticalLine, WhiteBox } from './styles';
import Avatar from '../../assets/joy.jpg';

export function ProfileComponent() {
  return (
    <>
      <Container >
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
              <input placeholder="Nome" id="nome"></input>
              <GrayLine/>
              <input placeholder="Sobrenome" id="sobrenome"></input>
              <GrayLine/>
              <input placeholder="Data Nascimento" id="datanascimento"></input>
              <GrayLine/>
              <input placeholder="E-mail" id="email"></input>
              <GrayLine/>
              <input placeholder="CPF" id="cpf"></input>
              <GrayLine/>
              
              <Salvar><h1>Salvar</h1></Salvar>
            </BlueBox>
         </RightColumn>
        </Content>        
      </Container>
    </>
  );
}