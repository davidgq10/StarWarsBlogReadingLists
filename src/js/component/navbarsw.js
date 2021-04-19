import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Form, Badge, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarSW = () => {
	const { store, actions } = useContext(Context);

	const getFavorites = store.favorites.map((item, index) => {
		return (
			<Dropdown.Item className="text-primary" key={index} onClick={() => actions.deleteFavorites(index)}>
				{item}
				<i className="fas fa-trash" />
			</Dropdown.Item>
		);
	});

	// const deleteFavorites = index => {
	// 	actions.deleteFavorites(index);
	// };

	return (
		<Navbar bg="light" fixed="top" className="bg-light justify-content-between mb-5">
			<Container>
				<Link to="/">
					<Navbar.Brand href="#home">
						<img
							src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
							width="auto"
							height="40"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Link>
				<Form inline>
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							Favorites <Badge variant="secondary">{store.favorites.length}</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu>{getFavorites}</Dropdown.Menu>
					</Dropdown>
				</Form>
			</Container>
		</Navbar>
	);
};
