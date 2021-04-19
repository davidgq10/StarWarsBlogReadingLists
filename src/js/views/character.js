import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { Table, Image, Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../../styles/singlecharacter.scss";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<Container className="margin-top100px">
			<Row>
				<Col>
					<Jumbotron>
						<Image
							src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/02/hipertextual-star-wars-ascenso-skywalker-tendra-version-extendida-pero-no-pelicula-2020880817.jpg?w=2500&ssl=1"
							fluid
						/>
					</Jumbotron>
				</Col>
				<Col>
					<h1>{store.characters[params.theid].name}</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged.
					</p>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Table className="table-borderless border-top border-danger border-3">
					<thead>
						<tr>
							<th className="text-danger text-center">Name</th>
							<th className="text-danger text-center">Birth Year</th>
							<th className="text-danger text-center">Gender</th>
							<th className="text-danger text-center">Height</th>
							<th className="text-danger text-center">Skin color</th>
							<th className="text-danger text-center">Eye color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-danger text-center">{store.characters[params.theid].name}</td>
							<td className="text-danger text-center">{store.characters[params.theid].birth_year}</td>
							<td className="text-danger text-center">{store.characters[params.theid].gender}</td>
							<td className="text-danger text-center">{store.characters[params.theid].height}</td>
							<td className="text-danger text-center">{store.characters[params.theid].skin_color}</td>
							<td className="text-danger text-center">{store.characters[params.theid].eye_color}</td>
						</tr>
					</tbody>
				</Table>
			</Row>
		</Container>
	);
};
