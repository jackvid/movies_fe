import React from "react";
import {
    Grid,
    Typography
} from '@mui/material';

const MovieDetailsContent = (props) => {

    const {
        movie
    } = props;

    return (
        <Grid
            rowSpacing={2}
            container
        >
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Year</Typography>
                <Typography variant="subtitle1">{movie.year}</Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Genre</Typography>
                <Typography variant="subtitle1">{movie.genre && movie.genre.name}</Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Description</Typography>
                <Typography variant="subtitle1">{movie.description}</Typography>
            </Grid>
            <Grid item sm={3} xs={3}>
                <Typography variant="subtitle2">Director</Typography>
                <Typography variant="subtitle1">{movie.directos && movie.directos.map(director => director.fullName)}</Typography>
            </Grid>
            <Grid item sm={9} xs={9}>
                <Typography variant="subtitle2">Actors</Typography>
                <Typography variant="subtitle1">{movie.actors && movie.actors.map(actor => actor.fullName)}</Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Runtime</Typography>
                <Typography variant="subtitle1">{movie.runtime}</Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Votes</Typography>
                <Typography variant="subtitle1">{movie.votes}</Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Revenue</Typography>
                <Typography variant="subtitle1">${movie.revenue}</Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="subtitle2">Revenue</Typography>
                <Typography variant="subtitle1">${movie.metascore}</Typography>
            </Grid>
        </Grid>
    );
}

export default MovieDetailsContent;