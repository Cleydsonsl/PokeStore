import Modal from 'react-modal';
import { ShoppingCart } from '../../components/shoppingCart'
import { Footer } from '../../components/Footer';


Modal.setAppElement('#root')

export function Cart() {

  return (
    <>
      
      <ShoppingCart />
      <Footer />
    </>
  );
}