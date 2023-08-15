import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import './App.css';

import SearchIcon from './search.svg';
import MovieLogo from './film_logo.png';

import { apiKey } from "./constants";


const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}`;


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [resultText, setResultText] = useState('');


    const searchMovies = async (title) => {
        const reponse = await fetch(`${API_URL}&s=${title}`);
        const data = await reponse.json();

        setMovies(data.Search);
        setResultText(title);
    }


    useEffect(() => {
        searchMovies('Avengers');
    }, []);

    return (
        <div className="app">
            <div className="title-container">
                <img
                    src={MovieLogo}
                    alt="logo"
                />
                <h1>MovieMaze</h1>
            </div>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {resultText !== ''
                ? (
                    <p className="results">Showing Results for "{resultText}"</p>)
                : (
                    <></>
                )}

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found!</h2>
                    </div>
                )}


        </div>
    );
}

export default App;