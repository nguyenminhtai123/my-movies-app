import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topMoviesHeader: {
            paddingBottom: 0,
        },
        topMoviesList: {
            paddingTop: 0,
        },
        topMovieItem: {
            paddingTop: '2px',
            paddingBottom: '2px',
        },
    }),
);

const TopMovies = () => {
    const classes = useStyles();
    return <div>TopMovies</div>;
};

export default TopMovies;
