import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import logowhite from '../../assets/logowhite.png'

import {
Box,
Container,
Row,
Column,
FooterLink,
Title,
Social,
Logo,
} from "./styled";

export const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
		<Logo src={logowhite}/>
		</Column>
		<Column>
			<Title>Sobre</Title>
			<FooterLink href="#">A PokeStore</FooterLink>
			<FooterLink href="#">Missão</FooterLink>
			<FooterLink href="#">Visão</FooterLink>
		</Column>
		<Column>
			<Title>Produtos</Title>
			<FooterLink href="#">Pokémons</FooterLink>
			<FooterLink href="#">Pedras Evolucionárias</FooterLink>
			<FooterLink href="#">Medicina</FooterLink>
			<FooterLink href="#">Poké Bolas</FooterLink>
		</Column>
		<Column>
			<Title>Contato</Title>
			<FooterLink href="#">(81) 2101-1111</FooterLink>
			<FooterLink href="#">contato@pokeshop.com</FooterLink>
			<FooterLink href="#">Rua B, Nº 02, Viridian, Kanto.</FooterLink>
		</Column>
		<Column>
			<Title>Social Media</Title>
			<FooterLink href="#">
			<span style={{ marginLeft: "10px" }}> 
			<Social src={facebook}/>&ensp;Facebook</span>
			
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
					<Social src={instagram}/>&ensp;Instagram</span>
			
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
					<Social src={twitter}/>&ensp;Twitter</span>
			
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
					<Social src={youtube}/>&ensp;Youtube</span>
			
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};