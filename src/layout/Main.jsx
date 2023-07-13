import React from 'react';
import Movies from '../components/Movies';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{
	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fbd7c20f&s=matrix`)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }));
	}

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true });
		fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fbd7c20f&s=` + str)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }));
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<div className='container'>
				<Search searchMovies={this.searchMovies} />
				<main className='container content'>
					{loading ? <Preloader /> : <Movies movies={movies}/>}
				</main>
			</div>
		)
	}
}

export default Main;