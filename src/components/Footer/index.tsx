import { S } from "./styled";

export function Footer() {
  return (
    <S.Footer>
        <S.Wrapper>
      <S.Title>PRECISA DE AJUDA?</S.Title>
      <S.Text>
        Atendimento de segunda à sexta {"\n"}
        das 8h00 às 17h00.
      </S.Text>
      <S.Title>TELEFONES</S.Title>
      <S.Text>
        (81) 2101-1111
        0900 11 5511
      </S.Text>
      <S.Title>E-MAIL</S.Title>
      <S.Text>
        contato@pokeshop.com.br
      </S.Text>
      </S.Wrapper>
    </S.Footer>
  )
}