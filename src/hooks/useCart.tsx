import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { IPokeProduct } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: IPokeProduct[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<IPokeProduct[]>(() => {
    const storagedCart = localStorage.getItem('@pokestore:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if(productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`/pokemon/${productId}`);

        const newProduct = {
          ...product.data,
          amout: 1
        }
        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      localStorage.setItem('@pokestore:cart', JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro ao adicionar no carrinho')
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);
            
      if(productIndex >= 0) {       
      updatedCart.slice(productIndex, 1);
      localStorage.setItem('@pokestore:cart', JSON.stringify(updatedCart))
    } else {
       throw Error();
      }
    }catch{
      throw toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if(productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
        localStorage.setItem('@pokestore:cart', JSON.stringify(updatedCart))
      } else{
        throw Error();
      }  
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}