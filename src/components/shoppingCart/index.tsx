import { Container, CartContainer, Content , Title, ButtonPrimario, ButtonSecundario, DivCep, DivCompra, ContainerCepCompra } from './styled';
import Table from 'react-bootstrap/Table'
import imgProduct from '../../assets/charmeleon.png'

export function ShoppingCart() { 
    return (
    <>
        <Container>
            <Title>Carrinho de Compras</Title>
                <Content>
                    <Table>
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
                                    <img src={imgProduct} alt="imagem" />
                                    <p>Charmeleon</p>
                                    <p>Tipo: Fogo</p> 
                                </td>
                                <td><p>R$ 1.000,00</p></td>
                                <td><input type="number" min="1"/></td>
                                <td><p>R$ 1.000,00</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </Content>
                <ButtonPrimario>Continuar Comprando</ButtonPrimario>
                <ButtonSecundario>Cancelar Compra</ButtonSecundario>
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
        </Container>
    </>
    )
}