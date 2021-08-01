import { Card, Container, Content, Grid, User } from './styles';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
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

interface modalProps {
  onOpenNewRegisterModal: () => void;
  onOpenLoginModal: () => void;
}

export function CardProduct({ onOpenNewRegisterModal, onOpenLoginModal }: modalProps) { 

  const [ pokeCard, setPokeCard ] = useState<IPokeProduct[]>([])
  const [ currentPage, setCurrentPage ] = useState(0);

  useEffect(() => {
    api.get(`/pokemon?_page=${currentPage}&per_page=10`)
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
    <>
      
      <Container>
        <User>
            <div className="blue">
              <div className="div">
                <label>
                  <input type="text" placeholder="Pesquisar" />
                </label>
              </div>
              
              <div className="users">
                <div className="user">
                  <FaUser className="FaUser"/> Faça seu <button type="button" 
                    onClick={onOpenLoginModal}
                  >
                    Login
                  </button> ou <button type="button" onClick={onOpenNewRegisterModal}>
                    Cadastre-se
                  </button>
                </div>

                <div className="car">
                  <FaShoppingCart /> Seu carrinho tem <a href="#">0</a> produtos
                </div>
              </div>
            </div>
            
          </User>
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
        <p id="sentinel"/>
      </Container>
    </>
  )
}
