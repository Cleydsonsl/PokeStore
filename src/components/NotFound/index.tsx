import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import NF404 from '../../assets/404.svg';

import {
	Container,
	Content,
  Voltar
} from "./styled";

export const NotFound = () => {
	return (
		<Container>
			<Content>
      <img src={NF404} alt="Not Found"/>
      <Voltar type = "submit"><h1>Voltar</h1></Voltar>
			</Content>
		</Container>
	);
};