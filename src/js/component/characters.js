import React, { useEffect, useContext } from "react";
import { Table, Card, Image, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/characters.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
	}, []);

	let getCards = store.characters.map((item, index) => {
		function getButton(name) {
			return (
				<Button
					onClick={!store.favorites.includes(name) ? () => actions.setFavorites(name) : null}
					variant="outline-warning float-right">
					{!store.favorites.includes(name) ? <i className="far fa-heart" /> : <i className="fas fa-heart" />}
				</Button>
			);
		}

		return (
			<td key={index}>
				<Card className="cardstyle">
					<Image
						src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/02/hipertextual-star-wars-ascenso-skywalker-tendra-version-extendida-pero-no-pelicula-2020880817.jpg?w=2500&ssl=1"
						fluid
					/>
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>
							<strong>Gender:</strong> {item.gender}
						</Card.Text>
						<Card.Text>
							<strong>Hair Color:</strong> {item.hair_color}
						</Card.Text>
						<Card.Text>
							<strong>Eye Color:</strong> {item.eye_color}
						</Card.Text>
						<Link to={"/character/" + index}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
						{getButton(item.name)}
					</Card.Body>
				</Card>
			</td>
		);
	});

	return (
		<Container className="margin-top100px">
			<h1>Characters</h1>
			<Table responsive>
				<tr>{getCards}</tr>
			</Table>
		</Container>
	);
};
