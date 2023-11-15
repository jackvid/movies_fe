import React, {useState, useEffect} from "react";
import {
    Dialog,
    DialogTitle,
    IconButton,
    DialogContent
} from '@mui/material';
import "./DialogMovieDetails.css";
import RestApiGet from "../api/ReatApiGet";
import MovieDetailsContent from "../components/MovieDetails/MovieDetailsContent";



const DialogMovieDetails = (props) => {

    const [movie, setMovie] = useState({});

    const {
        open,
        movieId,
        onMovieDetailsClose
    } = props;

    useEffect(() => {
        if(open) {
            RestApiGet.getData('/movies/' + movieId)
                .then((data) => setMovie(data));
        }
        return () => setMovie({});
    }, [movieId]);

    return (
        <Dialog
            fullWidth={true}
            open={open}
            aria-labelledby="customized-dialog-title"
            maxWidth="md"
            onClose={onMovieDetailsClose}
        >
                <DialogTitle
                    sx={{ m: 0, p: 2 }}
                    id="customized-dialog-title"
                >
                    {movie.title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onMovieDetailsClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <img src={require('../image/close.png')} alt="Close"/>
                    <div className="DialogMovieDetails-label">
                        CLOSE
                    </div>
                </IconButton>
                <img className="DialogMovieDetails-line" src={require('../image/line.png')} alt="Close"/>
                <DialogContent>
                    <MovieDetailsContent
                        movie={movie}
                    />
                </DialogContent>
        </Dialog>
    );
}

export default DialogMovieDetails;