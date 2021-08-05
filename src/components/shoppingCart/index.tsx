import { Container, Content, Title, ButtonPrimario, ButtonSecundario, DivCompra, ContainerCepCompra } from './styled';
import Table from 'react-bootstrap/Table'
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
  } from 'react-icons/md';

interface Iproducts {
    id: number;
    name: string;
    desc: string;
    price: number;
    cardNumber: string;
    amount: number;
}

export const ShoppingCart = (): JSX.Element => {
    const { cart, removeProduct, updateProductAmount } = useCart();

    const cartFormatted = cart.map(product => ({
        ...product, priceFormatted: formatPrice(product.price), subtotal: formatPrice(product.price * product.amount)
    }))
    const total =
        formatPrice(
            cartFormatted.reduce((sumTotal, product) => {
                sumTotal += product.price * product.amount

                return sumTotal
            }, 0)
        )

    function handleProductIncrement(product: Iproducts) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.amount + 1
        }
        updateProductAmount(IncrementArguments)        
    }

    function handleProductDecrement(product: Iproducts) {
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
                            {cartFormatted.map(product => (
                                <tr data-testid="product" key={product.id}>
                                    <td>
                                        <img src={`images/${product.id}.gif`} alt={product.name} />
                                        <p>{product.name}</p>
                                    </td>
                                    <td>
                                        <p>{product.priceFormatted}</p>
                                    </td>
                                    <td>
                                        <div className="qtdProduct">
                                            <button
                                                className="btni"
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
                                                className="btnd"
                                                type="button"
                                                data-testid="increment-product"
                                                onClick={() => handleProductIncrement(product)}
                                            >
                                                <MdAddCircleOutline size={20} />
                                            </button>
                                        </div>
                                    </td>
                                    <td><p>{product.subtotal}</p></td>
                                    <td>
                                        <button
                                            className="btnRemove"
                                            type="button"
                                            data-testid="remove-product"
                                            onClick={() => handleRemoveProduct(product.id)}
                                        >
                                            <MdDelete className="iconRemove" size={20} />
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
                        
                        <DivCompra>
                            <h3>valor total: {total}</h3>
                            <button>Finalizar Compra</button>
                        </DivCompra>
                    </ContainerCepCompra>
                       
            </Container>
                                     
        </>
        )
}