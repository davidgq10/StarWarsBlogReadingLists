import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { Table, Image, Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../../styles/characters.scss";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged.
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
							<th>{store.characters[params.theid].name}</th>
							<th>{store.characters[params.theid].birth_year}</th>
							<th>{store.characters[params.theid].gender}</th>
							<th>{store.characters[params.theid].height}</th>
							<th>{store.characters[params.theid].skin_color}</th>
							<th>{store.characters[params.theid].eye_color}</th>
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
