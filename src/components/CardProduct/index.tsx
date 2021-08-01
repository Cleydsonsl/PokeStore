import { Card, Container, Content, Grid, Pag } from './styles';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface IPokeProduct {
  id: number;
  name: string;
  desc: string;
  price: string;
  cardNumber: string;
  type: {
    tp1: string;
    tp2?: string;
  }
}

export function CardProduct() { 

  const [ pokeCard, setPokeCard ] = useState<IPokeProduct[]>([])
  

  useEffect(() => {
    api.get('/pokemon')
    .then(response => { 
      setPokeCard(response.data ); 
      console.log(pokeCard)})
    .catch(err => console.log(err));
  }, [pokeCard]);
  
  return (
    <Container>
      <Content>
        <Grid>
        { pokeCard.map(pokecard => (
          <Card key={pokecard.id}>
            <div className="img">
              <img src={`images/${pokecard.id}.gif`} alt={pokecard.name} />
            </div>
              
            <h2>{`${pokecard.name} ${pokecard.cardNumber}`}</h2>
            <div className="descriptions">
              <p>Tipo: {`${pokecard.type.tp1} ${pokecard.type.tp2}`}</p>
            </div>
            <div className="values">
              <p className="cifr">R$</p>
              <p className="value">{pokecard.price}</p>
              <p className="valuesec">,00</p>
            </div> 
          </Card>
          ))}
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



