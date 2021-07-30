import { Container, CartContainer, Title, ButtonPrimario, ButtonSecundario, DivCep, DivCompra, ContainerCepCompra } from './styled';

export function ShoppingCart() { 
    return (
        <div>
        <Title>Carrinho de Compras</Title>
        <Container>
        <table>
            <tr>
                <th>Produto</th>
                <th>Valor Unitario</th>
                <th>Quantidade</th>
                <th>Sub-total</th>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
            </tr>
            </table>
            
        </Container>
        
            <ButtonPrimario>Continuar Comprando</ButtonPrimario>
            <ButtonSecundario>Finalizar Compra</ButtonSecundario>
        <ContainerCepCompra>
            <DivCep>
                <p>Informe seu cep para calcular o valor da entrega:</p>
                <input placeholder="Cep"></input>
            </DivCep>
            <DivCompra>
                <p>valor total:</p>
                <p>R$ 1.000,00</p>
                <button>Finalizar Compra</button>
            </DivCompra>
        </ContainerCepCompra>
        </div>
    )
}