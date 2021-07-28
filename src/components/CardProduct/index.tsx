
import { Card, Container, Content, Grid, Pag } from './styles';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import imgProduct from '../../assets/charmeleon.png';


export function CardProduct() { 
  

  return (
    <Container>
      <Content>
        <Grid>
          <Card>
            <img src={imgProduct} alt="digimon" />
            <h2>Charmeleon #005</h2>
            <div className="descriptions">
              Tipo: Fogo <br/>
              Vantagem: Grama <br/>
              Desvantagem: Água
            </div>
            <div className="values">
              <p className="cifr">R$</p>
              <p className="value">1.000</p>
              <p className="valuesec">,00</p>
            </div>
          </Card>
        </Grid>
      </Content>
      <Pag>
        <div className="page">  
          <a href=""><GrFormPrevious /> Return</a>
          <a href="">Next <GrFormNext/></a>
        </div>
      </Pag>
    </Container>
  )
}



