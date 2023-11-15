import React from "react";
import "./MoviesTable.css";

const labels = [
    {
        title:"Ranking",
        width:"10%",
        align: "center"
    },
    {
        title:"Title",
        width: "40%"
    },
    {
        title: "Year",
        width: "20%"
    },
    {
        title: "Revenue",
        width: "35%"
    },
    {
        title: "",
        width: "5%"
    }
];

const MoviesTable = (props) => {

    const {
        movies,
        onMovieClicked
    } = props;

    return (
        <table className="MoviesTable-table">
            <thead>
                <tr>
                    {
                        labels.map((label, index) => {
                            return (
                                index === 0 ?
                                    <th className="align" key={index} width={label.width}>{label.title}</th>
                                :
                                    <th key={index} width={label.width}>{label.title}</th>
                            );
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, index) => {
                        return(
                            <tr key={movie.movieId}>
                                <td align="center">{index + 1}</td>
                                <td align="left">{movie.title}</td>
                                <td align="left">{movie.year}</td>
                                <td align="left">{movie.revenue}</td>
                                <td onClick={() => onMovieClicked(movie.movieId)} align="center"><img src={require('../../image/eye.png')} alt="Details"/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default MoviesTable;