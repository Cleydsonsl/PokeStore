import { Container, Content } from './styles';
import logoImg from '../../assets/logo2.png';

export function Header() {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="PokéStore" />
      </Content>
    </Container>
  )
}