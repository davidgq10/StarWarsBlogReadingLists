import React from "react";
import { Table, Card, Image, Button, Container } from "react-bootstrap";
import "../../styles/characters.scss";

export const Planets = () => {
	return (
		<Container>
			<h1>Planets</h1>
			<Table responsive>
				<tr>
					<Card className="cardstyle">
						<Image
							src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
							fluid
						/>
						<Card.Body>
							<Card.Title>Nombre</Card.Title>
							<Card.Text>Population: Male</Card.Text>
							<Card.Text>Terrain: Blond</Card.Text>
							<Button variant="outline-primary">Learn more!</Button>
							<Button variant="warning ml-1">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</tr>
			</Table>
		</Container>
	);
};
