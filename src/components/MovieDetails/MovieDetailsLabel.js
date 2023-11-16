import React from "react";
import { Typography} from "@mui/material";


const MovieDetailsLabel = (props) => {

    const {
        label,
        style,
        content
    } = props;

    return (
        <>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography style={style} sx={{ fontWeight: 'bold' }}variant="subtitle1">{content}</Typography>
        </>
    );
}

export default MovieDetailsLabel;