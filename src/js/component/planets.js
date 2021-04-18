import React, { useEffect, useContext } from "react";
import { Table, Card, Image, Button, Container } from "react-bootstrap";
import "../../styles/characters.scss";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
	}, []);

	function handleClick(e) {
		e.preventDefault();
		console.log("The link was clicked.");
	}

	let getPlanets = store.planets.map((item, index) => {
		return (
			<td key={index}>
				{" "}
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
						<Button onClick={e => handleClick(e)} variant="outline-primary">
							Learn more!
						</Button>
						<Button variant="outline-warning">
							<i className="far fa-heart" />
						</Button>
					</Card.Body>
				</Card>
			</td>
		);
	});

	return (
		<Container>
			<h1 className="mt-5">Planets</h1>
			<Table responsive>
				<tr>{getPlanets}</tr>
			</Table>
		</Container>
	);
};
