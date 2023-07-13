/* eslint-disable jsx-a11y/alt-text */
function Movie({Title: title, Year: year, imdbID: id, Type: type, Poster: poster}) {
	return (
		<>
			<div id={id} className="card movie">
			<div className="card-image">
					<img src={poster} />
					<span className="card-title">{ title}</span>
			</div>
			<div className="card-content">
					<p>Year: {year}</p>
					<p>Type: {type}</p>
				</div>
			</div>
		</>
	)
}

export default Movie;