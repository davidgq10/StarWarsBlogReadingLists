const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			fetchCharacters: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};

				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				setStore({ characters: json.results });
			},

			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};

				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				setStore({ planets: json.results });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			deleteFavorites: id => {
				const store = getStore();
				setStore({ favorites: [...store.favorites].filter((value, index) => index !== id) });
			}
		}
	};
};

export default getState;
