import { Container, Content, User } from './styles';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import logoImg from '../../assets/logo2.png';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="PokéStore" />
      </Content>
      <User>
        <div className="search">
          <label>
            <input type="text" placeholder="Pesquisar" />
          </label>
          
          <div className="user">
            <FaUser className="FaUser"/> Faça seu <a href="#">Login</a> ou <a href="#">Cadastre-se</a>
          </div>

          <div className="car">
            <FaShoppingCart className="ShopCar"/> Seu carrinho tem <a href="#">0</a> produtos
          </div>
        </div>
      </User>
    </Container>
  )
}