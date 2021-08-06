import Modal from 'react-modal';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import { api } from '../../services/api';

import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';




interface IPokeProduct {
  id: number;
  name: string;
  desc: string;
  price: number;
  cardNumber: string;
  amount: number;
  type: {
    tp1: string;
    tp2?: string;
  }
}


interface ModalCardDetalhesProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalCardDetalhes({ isOpen, onRequestClose }: ModalCardDetalhesProps) {
  const { cart, addProduct, removeProduct, updateProductAmount } = useCart();
  const [pokeCard, setPokeCard] = useState<IPokeProduct[]>([])

  function handleProductIncrement(product: IPokeProduct) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleProductDecrement(product: IPokeProduct) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

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

      <Container>

        <h2>Você que adicionar esse produto ao carrinho?</h2>


        <div>
          <img src={`images/${product.id}.gif`} alt={product.name} />
        </div>

        <h2>{`${product.name} ${product.cardNumber}`}</h2>
        <div className="descriptions">
          <p>Tipo: {`${product.type.tp1} ${product.type.tp2}`}</p>
        </div>
        <td><p>{product.priceFormatted}</p></td>
        <div>
          <button
            type="button"
            data-testid="decrement-product"
            disabled={product.amount <= 1}
            onClick={() => handleProductDecrement(product)}
          >
            <MdRemoveCircleOutline size={20} />
          </button>
          <input
            type="text"
            data-testid="product-amount"
            readOnly
            value={product.amount}
          />
          <button
            type="button"
            data-testid="increment-product"
            onClick={() => handleProductIncrement(product)}
          >
            <MdAddCircleOutline size={20} />
          </button>
        </div>


        <td>
          <button
            type="button"
            data-testid="remove-product"
            onClick={() => handleRemoveProduct(product.id)}
          >
            <MdDelete size={20} />

          </button>
        </td>
        <button type="submit" onClick={() => handleAddProduct(product.id)}>Adicionar ao Carrinho</button>

      </Container>

    </Modal>
  )
}