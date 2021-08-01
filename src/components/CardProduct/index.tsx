import { Card, Container, Content, Grid } from './styles';
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
  const [ currentPage, setCurrentPage ] = useState(0);

  useEffect(() => {
    api.get(`/pokemon?_page=${currentPage}&_limit=12`)
    .then(response => {setPokeCard(response.data)})
    //.then((newPokes:void) => setPokeCard((prevPoke) => [...prevPoke, ...newPokes.]))
    .catch(err => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        console.log('Elemento visivel');
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    });

    intersectionObserver.observe(document.querySelector('#sentinel') as HTMLInputElement);

    return () => intersectionObserver.disconnect()
  }, []);
  
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
            <button className="car" type="submit">ADICIONAR AO CARRINHO</button>
          </Card>
          ))}
        </Grid>
      </Content>
      <p id="sentinel"/>
    </Container>
  )
}
