import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { User } from './styles';
import { useCart } from '../../hooks/useCart';

interface modalProps {
  onOpenNewRegisterModal: () => void;
  onOpenLoginModal: () => void;
}

export function HeaderFalse({ onOpenNewRegisterModal, onOpenLoginModal }: modalProps) {
  
  const { cart } = useCart();
  const cartSize = cart?.length;

  return (
    <User>
      <div className="blue">
        <div className="div">
          <label>
            <input type="text" placeholder="Pesquisar" />
          </label>
        </div>
        
        <div className="users">
          <div className="user">
            <FaUser className="FaUser"/> Faça seu <button type="button" 
              onClick={onOpenLoginModal}
            >
              Login
            </button> ou <button type="button" onClick={onOpenNewRegisterModal}>
              Cadastre-se
            </button>
          </div>

          <span className="car">
            <FaShoppingCart /> <a className="cart" href="/cart"> Seu carrinho tem <p className="shop">{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</p></a>
          </span>
        </div>
      </div>
      
    </User>
  )
}