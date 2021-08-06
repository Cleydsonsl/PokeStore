import { Card, Container, Content, Grid } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';

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

interface ProductFormatted extends IPokeProduct {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

export function CardProduct() { 

  const [ pokeCard, setPokeCard ] = useState<ProductFormatted[]>([])
  const [ currentPage, setCurrentPage ] = useState(1);
  // const [ products, setProducts ] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   const newSumAmount = {...sumAmount};
  //   newSumAmount[product.id] = product.amount;

  //   return newSumAmount;

  // }, {} as CartItemsAmount);

  // useEffect(() => {
  //   async function loadProducts() {

  //   }

  //   loadProducts();
  // }, []);

  // function handleAddProduct(id: number) {
  //   // TODO
  // }

  useEffect(() => {
    api.get<ProductFormatted[]>(`/pokemon?_page=${currentPage}&_limit=12`)
    .then((newPokes) => setPokeCard((prevPoke) => [...prevPoke, ...newPokes.data]))
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

  function handleAddProduct(id: number) {
    addProduct(id)
  }
  
  return (
    <>      
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
              <button className="car" type="submit" onClick={() => handleAddProduct(pokecard.id)}>ADICIONAR AO CARRINHO</button> 
            </Card>
            ))}
          </Grid>
        </Content>
        <p id="sentinel"/>
      </Container>
    </>
  )
}
