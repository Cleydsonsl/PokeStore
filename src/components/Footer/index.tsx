import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import logowhite from '../../assets/logowhite.png';

import {
	Container,
	Content,
	Column,
	FooterLink,
	Title,
	Logo
} from "./styled";

export const Footer = () => {
	return (
		<Container>
			<Content>
				<Column>
					<img src={logowhite} alt="pokestore"/>
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
						<FaFacebookSquare />&ensp;Facebook			
					</FooterLink>
					<FooterLink href="#">
						<FaInstagramSquare />&ensp;Instagram			
					</FooterLink>
					<FooterLink href="#">
						<FaTwitterSquare />&ensp;Twitter			
					</FooterLink>
					<FooterLink href="#">
						<FaYoutubeSquare />&ensp;Youtube			
					</FooterLink>
				</Column>
			</Content>
		</Container>
	);
};