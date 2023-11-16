import React from "react";
import {
    Grid,
    Typography
} from '@mui/material';
import MovieDetailsLabel from "./MovieDetailsLabel";

const MovieDetailsContent = (props) => {

    const {
        movie
    } = props;

    debugger;

    return (
        <Grid
            rowSpacing={2}
            columnSpacing={2}
            container
        >
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Year"
                    content={movie.year}
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Genre"
                    content={movie.genres && movie.genres.map(genre => genre.name).join(" ")}
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Description"
                    content={movie.description}
                />
            </Grid>
            <Grid item sm={3} xs={3}>
                <MovieDetailsLabel
                    label="Directors"
                    style={{ color: '#00BAFF' }}
                    content={movie.directors && movie.directors.map(director => director.fullName).join(" ")}
                />
            </Grid>
            <Grid item sm={9} xs={9}>
                <MovieDetailsLabel
                    label="Actors"
                    style={{ color: '#00BAFF' }}
                    content={movie.actors && movie.actors.map(actor => actor.fullName).join(" ")}
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Runtime"
                    content={movie.runtime + " mins"}
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Votes"
                    content={movie.votes}
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Revenue"
                    content={"$" + (movie.revenue && movie.revenue.toLocaleString())}
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <MovieDetailsLabel
                    label="Metascore"
                    content={movie.metaScore}
                />
            </Grid>
        </Grid>
    );
}

export default MovieDetailsContent;