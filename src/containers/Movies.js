import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import "./Movies.css";
import MovieRankingLabel from "../components/MovieRankingLabel/MovieRankingLabel";
import Filters from "../components/Filters/Filters";
import MoviesTable from "../components/MovieTable/MoviesTable";
import RestApiGet from "../api/ReatApiGet";
import DialogMovieDetails from "./DialogMovieDetails";
import DialogSelectYear from "../components/DialogSelectYear";

const Movies = (props) => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [allLoaded, setAllLoaded] = useState(false);

    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const [top10ByRevenueActive, setTop10ByRevenueActive] = useState(false);
    const [top10RevenuePerYearActive, setTop10RevenuePerYearActive] = useState(false);

    const [dialogMovieDetailsOpen, setDialogMovieDetailsOpen] = useState(false);
    const [dialogSelectYearOpen, setDialogSelectYearOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    const handleScroll = () => {
        const isScrollToBottom = document.documentElement.clientHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight;
        if(!isScrollToBottom || isLoading) {
            return;
        }
        fetchData();
    };

    const fetchData = async () => {
        if(isLoading || allLoaded) return;
        setIsLoading(true);

        try {
            const data = await RestApiGet.getData('/movies', '?page=' + page);
            if(data.length === 0) {
                setAllLoaded(true);
            }
            setMovies(prevMovies => [...prevMovies, ...data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTop10RevenueClicked = async () => {
        setAllLoaded(true);
        setPage(0);
        const data = await RestApiGet.getData('/movies', '?page=0&topTenRevenue=true');
        setMovies(data);
        setTop10RevenuePerYearActive(false);
        setTop10ByRevenueActive(true);
    }

    const handleMovieClicked = (movieId) => {
        setDialogMovieDetailsOpen(true);
        setSelectedMovieId(movieId);
    }

    const handleMovieDetailsClose = () => {
        setDialogMovieDetailsOpen(false);
        setSelectedMovieId(null);
    }

    const handleTop10RevenuePerYearClicked = () => {
        setDialogSelectYearOpen(true);
    }

    const handleSelectYearClose = () => {
        setDialogSelectYearOpen(false);
    }

    const handleSelectYearClick = async (year) => {
        setAllLoaded(true);
        setPage(0);
        const data = await RestApiGet.getData('/movies', '?page=0&topTenRevenue=true&year=' + year);
        setMovies(data);
        setTop10RevenuePerYearActive(true);
        setTop10ByRevenueActive(false);
        setDialogSelectYearOpen(false);
    }

    const handleRefresh = () => {
        onReset();
    }

    const {
        onReset
    } = props;

    return (
        <>
            <Header/>
            <div className="Movies-container">
                <div className="Movies-content">
                    <MovieRankingLabel />
                    <Filters
                        top10ByRevenueActive={top10ByRevenueActive}
                        top10RevenuePerYearActive={top10RevenuePerYearActive}
                        onTop10RevenueClicked={handleTop10RevenueClicked}
                        onTop10RevenuePerYearClicked={handleTop10RevenuePerYearClicked}
                        onRefresh={handleRefresh}
                    />
                    <MoviesTable
                        onMovieClicked={handleMovieClicked}
                        movies={movies}
                    />
                    {isLoading && <p>Loading...</p>}
                    {allLoaded && <p>All data have been loaded</p>}
                </div>
            </div>
            <DialogMovieDetails
                open={dialogMovieDetailsOpen}
                movieId={selectedMovieId}
                onMovieDetailsClose={handleMovieDetailsClose}
            />
            <DialogSelectYear
                open={dialogSelectYearOpen}
                onSelectYearClose={handleSelectYearClose}
                onSelectYearClick={handleSelectYearClick}
            />
        </>
    );
}

export default Movies;