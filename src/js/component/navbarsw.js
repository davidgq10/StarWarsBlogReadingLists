import React from "react";
import { Navbar, Container, Form, FormControl, Badge, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarSW = () => {
	return (
		<Navbar bg="light" className="bg-light justify-content-between mb-4">
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
					<FormControl type="text" placeholder="Search" className="mr-sm-2" border="warning" />
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							Favorites <Badge variant="secondary">9</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Form>
			</Container>
		</Navbar>
	);
};
