import React from "react";
import { Table, Card, Button } from "react-bootstrap";
import "../../styles/characters.scss";

export const Characters = () => {
	return (
		<Table responsive>
			<tr>
				<th>
					<Card className="cardstyle">
						<Card.Img
							id="img-card-adjust"
							variant="top"
							src="https://i.blogs.es/2cc78a/ordenstarwars/450_1000.jpg"
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
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning float-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>

				<th>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>Nombre</Card.Text>
							<Card.Text>Gender: Male</Card.Text>
							<Card.Text>Hair Color: Blond</Card.Text>
							<Card.Text>Eye Color: Blue</Card.Text>
							<Button variant="primary">Go somewhere</Button>
							<Button variant="warning flex-right">
								<i className="far fa-heart" />
							</Button>
						</Card.Body>
					</Card>
				</th>
			</tr>
		</Table>
	);
};
