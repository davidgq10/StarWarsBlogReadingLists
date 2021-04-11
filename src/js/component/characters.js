const formatCharacters = () => {
		for (let uid in characters) {
			return (
				<div className="col-4">
					<div className="card">
						<img
							className="img-fluid max-width: 100%; height: 200px"
							src="https://image.api.playstation.com/cdn/UP1082/PCSE00802_00/RRG7wTtR7CNUpSyV4v1MeUZI30BhkeqO.png"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title mt-2 mb-4">{characters.name}</h5>
							<p className="card-text m-1">Gender: Male</p>
							<p className="card-text m-1">Hair Color: Blond</p>
							<p className="card-text m-1">Eye Color: Blue</p>
							<a href="#" className="btn btn-light btn-outline-primary float-left mt-4">
								Lear more!
							</a>
							<button type="button" className="btn btn-outline-warning float-right mt-4">
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				</div>
			);
		}
	};