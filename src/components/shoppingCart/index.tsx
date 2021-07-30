import { Container, CartContainer, Title, ButtonPrimario, ButtonSecundario, DivCep, DivCompra, ContainerCepCompra } from './styled';
import Table from 'react-bootstrap/Table'
import imgProduct from '../../assets/charmeleon.png'

export function ShoppingCart() { 
    return (
        <div>
        <Title>Carrinho de Compras</Title>
        <Container>
        <Table >
            <thead>
                <tr>
                    <th><h3>Produto</h3></th>
                    <th><h3>Valor Unitario</h3></th>
                    <th><h3>Quantidade</h3></th>
                    <th><h3>Sub-total</h3></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div>
                            <img src={imgProduct} alt="imagem" />
                            <div>
                                <h3>Charmeleon</h3>
                                <p>Tipo: Fogo</p> 
                            </div>
                        </div>
                    </td>
                    <td><p>R$ 1.000,00</p></td>
                    <td><input type="number" min="1"/></td>
                    <td><p>R$ 1.000,00</p></td>
                </tr>
            </tbody>
            </Table>
        </Container>
        
            <ButtonPrimario>Continuar Comprando</ButtonPrimario>
            <ButtonSecundario>Finalizar Compra</ButtonSecundario>
        <ContainerCepCompra>
            <DivCep>
                <h3>Informe seu cep para calcular o valor da entrega:</h3>
                <input placeholder="Cep"></input>
            </DivCep>
            <DivCompra>
                <h3>valor total:</h3>
                <h3>R$ 1.000,00</h3>
                <button>Finalizar Compra</button>
            </DivCompra>
        </ContainerCepCompra>
        </div>
    )
}