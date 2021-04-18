import React from "react";
import { Table, Image, Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../../styles/characters.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const Single = (props) => {

    const {store, actions} = useContext(Context);
    const params = useParams()

	return (
		<Container>
			<Row>
				<Col>
					<Jumbotron>
						<Image
							src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/11/star-wars-nueva-esperanza-luke-skywalker.jpg?itok=D7VACeGz"
							fluid
						/>
					</Jumbotron>
				</Col>
				<Col>
					<h1>{store.characters[params.theid].name}</h1>
					<p>
						Luke Skywalker fue un humano sensible a la Fuerza y un Maestro Jedi quien, junto a su hermana
						gemela, la Princesa Leia Organa, luchó en contra del gobierno del Imperio Galáctico durante la
						Guerra Civil Galáctica. Hijo del Caballero Jedi Anakin Skywalker y de la Senadora Padmé Amidala
						de Naboo, Luke nació poco después del final de la Guerras Clon el 19 ABY. Como resultado de la
						muerte de su madre y de la caída de su padre al lado oscuro de la Fuerza, Luke fue enviado al
						planeta natal de Anakin, Tatooine, para vivir con sus relativos, Owen y Beru Lars, durante los
						primeros 19 años de su vida.
					</p>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Birth Year</th>
							<th>Gender</th>
							<th>Height</th>
							<th>Skin color</th>
							<th>Eye color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>store.characters[params.theid].name</th>
							<th>store.characters[params.theid].birth_year</th>
							<th>store.characters[params.theid].gender</th>
							<th>store.characters[params.theid].height</th>
							<th>store.characters[params.theid].skin_color</th>
							<th>store.characters[params.theid].eye_color</th>
						</tr>
					</tbody>
				</Table>
			</Row>
		</Container>
	);
};

Single.propTypes = {
	match: PropTypes.object
};