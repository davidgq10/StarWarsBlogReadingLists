import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeSW } from "./views/homesw";
import injectContext from "./store/appContext";

import { NavbarSW } from "./component/navbarsw";
import { Character } from "./views/character";
import { Planet } from "./views/planet";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarSW />
					<Switch>
						<Route exact path="/">
							<HomeSW />
						</Route>
						<Route exact path="/character/:theid">
							<Character />
						</Route>
						<Route exact path="/planet/:theid">
							<Planet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
