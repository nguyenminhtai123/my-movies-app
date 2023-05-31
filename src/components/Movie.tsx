import React, { ChangeEvent, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Button, Chip, PropTypes } from '@material-ui/core';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        movieInput: {
            marginRight: '5px',
        },
        movieChip: {
            fontSize: '2rem',
            padding: '30px 10px',
            margin: '5px',
        },
    }),
);

const Movie = () => {
    const classes = useStyles();

    const [movie, setMovie] = useState('');

    const { theme } = useContext(ThemeContext);
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;

    const { movies, addMovie, deleteMovie } = useContext(MovieContext);

    const onMovieInputChange = (e: ChangeEvent<HTMLInputElement>) => setMovie(e.target.value);
    return (
        <>
            <Box display="flex" justifyContent="center" py={5}>
                <TextField
                    label="Your favourite film is ....."
                    variant="outlined"
                    className={classes.movieInput}
                    onChange={onMovieInputChange}
                    value={movie}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        addMovie(movie);
                        setMovie('');
                    }}
                >
                    Add
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
                {movies.map((movie) => (
                    <Chip
                        key={movie.id}
                        label={movie.title}
                        clickable
                        color={chipTheme}
                        className={classes.movieChip}
                        onDelete={deleteMovie.bind(this, movie.id)}
                    />
                ))}
            </Box>
        </>
    );
};

export default Movie;
