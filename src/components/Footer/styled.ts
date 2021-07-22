import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;
`

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px){
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));}
`

const Columm = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`

const Link = styled.div`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
    color: white;
    transition: 200ms ease-in;
  }
`

const Title = styled.div`
font-size: 24px;
color:#fff;
margin-bottom: 40px;
font-weight: bold;
`

export const S ={
    Wrapper,
    Row,
    Columm,
    Link,
    Title,
}