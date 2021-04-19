import React, { useEffect, useContext } from "react";
import { Table, Card, Image, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/characters.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	let getPlanets = store.planets.map((item, index) => {
		function getButton(name) {
			return (
				<Button
					onClick={!store.favorites.includes(name) ? () => actions.setFavorites(name) : null}
					variant="outline-warning">
					{!store.favorites.includes(name) ? <i className="far fa-heart" /> : <i className="fas fa-heart" />}
				</Button>
			);
		}
		return (
			<td key={index}>
				<Card className="cardstyle">
					<Image src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg" fluid />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>
							<strong>Population:</strong> {item.population}
						</Card.Text>
						<Card.Text>
							<strong>Terrain:</strong> {item.terrain}
						</Card.Text>
						<Link to={"/planet/" + index}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
						{getButton(item.name)}
					</Card.Body>
				</Card>
			</td>
		);
	});

	return (
		<Container className="mb-5">
			<h1 className="mt-5">Planets</h1>
			<Table responsive>
				<tr>{getPlanets}</tr>
			</Table>
		</Container>
	);
};
