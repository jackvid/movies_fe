import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import "./Movies.css";
import MovieRankingLabel from "../components/MovieRankingLabel/MovieRankingLabel";
import Filters from "../components/Filters/Filters";
import MoviesTable from "../components/MovieTable/MoviesTable";
import RestApiGet from "../api/ReatApiGet";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchData();
    };

    const fetchData = async () => {
        if(isLoading || allLoaded) return;
        setIsLoading(true);
        setError(null);

        try {
            const data = await RestApiGet.getData('/movies', '?page=' + page);
            if(data.length === 0) {
                setAllLoaded(true);
            }
            setMovies(prevMovies => [...prevMovies, ...data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };


    //Ovo ide u state od movies list
    //const [movies, setMovies] = useState([]);

    //ovdje ce ici state od Top 10 Revenu i Top 10 revenu by year buttona

    //I need to implement use effect for fetching data and put in that use effect scroll
    //funcionality

    return (
        <>
            <Header/>
            <div className="Movies-container">
                <div className="Movies-content">
                    <MovieRankingLabel />
                    <Filters />
                    <MoviesTable movies={movies}/>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {allLoaded && <p>All data has been loaded</p>}
                </div>
            </div>
        </>
    );
}

export default Movies;