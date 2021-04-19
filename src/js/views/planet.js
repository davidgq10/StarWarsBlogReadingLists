import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { Table, Image, Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../../styles/singleplanet.scss";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<Container className="margin-top100px">
			<Row>
				<Col>
					<Jumbotron>
						<Image
							src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
							fluid
						/>
					</Jumbotron>
				</Col>
				<Col>
					<h1>{store.planets[params.theid].name}</h1>
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
							<th className="text-danger text-center">Climate</th>
							<th className="text-danger text-center">Population</th>
							<th className="text-danger text-center">Orbital period</th>
							<th className="text-danger text-center">Rotation period</th>
							<th className="text-danger text-center">Diameter</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-danger text-center">{store.planets[params.theid].name}</td>
							<td className="text-danger text-center">{store.planets[params.theid].climate}</td>
							<td className="text-danger text-center">{store.planets[params.theid].population}</td>
							<td className="text-danger text-center">{store.planets[params.theid].orbital_period}</td>
							<td className="text-danger text-center">{store.planets[params.theid].rotation_period}</td>
							<td className="text-danger text-center">{store.planets[params.theid].diameter}</td>
						</tr>
					</tbody>
				</Table>
			</Row>
		</Container>
	);
};
