import { Container, CartContainer, Content, Title, ButtonPrimario, ButtonSecundario, DivCep, DivCompra, ContainerCepCompra } from './styled';
import Table from 'react-bootstrap/Table'
import imgProduct from '../../assets/charmeleon.png'
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
  } from 'react-icons/md';

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

export const ShoppingCart = (): JSX.Element => {
    const { cart, removeProduct, updateProductAmount } = useCart();

    const cartFormatted = cart.map(IPokeProduct => ({
        ...IPokeProduct, priceFormatted: formatPrice(IPokeProduct.price), subtotal: formatPrice(IPokeProduct.price * IPokeProduct.amount)
    }))
    const total =
        formatPrice(
            cartFormatted.reduce((sumTotal, product) => {
                sumTotal += product.price * product.amount

                return sumTotal
            }, 0)
        )

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

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }


    return (
        <>
            <Container>
                <Title>Carrinho de Compras</Title>
                <Content>
                    <Table>
                        <thead>
                            <tr>
                                <th><h3>Produto</h3></th>
                                <th><h3>Valor Unitário</h3></th>
                                <th><h3>Quantidade</h3></th>
                                <th><h3>Sub-total</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartFormatted.map(IPokeProduct => (
                                <tr data-testid="product" key={IPokeProduct.id}>
                                    <td>
                                    <img src={`images/${IPokeProduct.id}.gif`} alt={IPokeProduct.name} />
                                        <p>{IPokeProduct.name}</p>
                                        <p>{IPokeProduct.desc}</p>
                                    </td>
                                    <td><p>{IPokeProduct.priceFormatted}</p></td>
                                    <td>
                                        <div>
                                            <button
                                                type="button"
                                                data-testid="decrement-product"
                                                disabled={IPokeProduct.amount <= 1}
                                                onClick={() => handleProductDecrement(IPokeProduct)}
                                            >
                                                <MdRemoveCircleOutline size={20} />
                                            </button>
                                            <input
                                                type="text"
                                                data-testid="product-amount"
                                                readOnly
                                                value={IPokeProduct.amount}
                                            />
                                            <button
                                                type="button"
                                                data-testid="increment-product"
                                                onClick={() => handleProductIncrement(IPokeProduct)}
                                            >
                                                <MdAddCircleOutline size={20} />
                                            </button>
                                        </div>
                                    </td>
                                    <td><p>{IPokeProduct.subtotal}</p></td>
                                    <td>
                                        <button
                                            type="button"
                                            data-testid="remove-product"
                                            onClick={() => handleRemoveProduct(IPokeProduct.id)}
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                   </td>     
                                </tr>
                                ))}  
                        </tbody>
                    </Table>
                </Content>
                    <ButtonPrimario >Continuar Comprando</ButtonPrimario>
                    <ButtonSecundario >Cancelar Compra</ButtonSecundario>
                    <ContainerCepCompra>
                        <DivCep>
                            <h3>Informe seu cep para calcular o valor da entrega:</h3>
                            <input placeholder="Cep"></input>
                        </DivCep>
                        <DivCompra>
                            
                            <h3>valor total:</h3>
                            <h3>{total}</h3>
                            
                            <button>Finalizar Compra</button>
                        </DivCompra>
                    </ContainerCepCompra>
                       
            </Container>
                                     
        </>
        )
}