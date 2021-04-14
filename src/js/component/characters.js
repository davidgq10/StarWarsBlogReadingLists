import React from "react";
import { Table, Card, Image, Button, Container } from "react-bootstrap";
import "../../styles/characters.scss";

export const Characters = () => {
	return (
		<Container>
			<h1>Characters</h1>
			<Table responsive>
				<tr>
					<Card className="cardstyle">
						<Image
							src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2020/02/hipertextual-star-wars-ascenso-skywalker-tendra-version-extendida-pero-no-pelicula-2020880817.jpg?w=2500&ssl=1"
							fluid
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								<strong>Nombre:</strong> Holas mucho nombre
							</Card.Text>
							<Card.Text>
								<strong>Gender:</strong> Male
							</Card.Text>
							<Card.Text>
								<strong>Hair Color:</strong> Blond
							</Card.Text>
							<Card.Text>
								<strong>Eye Color:</strong> Blue
							</Card.Text>
							<Button variant="outline-primary">Learn more!</Button>
							<Button variant="warning float-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</tr>
			</Table>
		</Container>
	);
};
