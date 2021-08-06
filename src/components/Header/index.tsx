import { Container, Content } from './styles';
import logoImg from '../../assets/logo2.png';

export function Header() {
  
  return (
    <Container>
      <Content>
        <a href="http://localhost:3000/"><img src={logoImg} alt="PokéStore" /></a>
      </Content>
    </Container>
  )
}