import Navbar from './components/Navbar';
import './App.css';
import React from 'react';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import Movie from './components/Movie';
import AuthContextProvider from './contexts/AuthContext';
import { Grid } from '@material-ui/core';
import TopMovies from './components/TopMovies';
import TopMovieContextProvider from './contexts/TopMovieContext';

function App() {
    return (
        <div>
            <TopMovieContextProvider>
                <AuthContextProvider>
                    <MovieContextProvider>
                        <ThemeContextProvider>
                            <ProgressContextProvider>
                                <Navbar />
                                <Grid container>
                                    <Grid item xs={4}>
                                        <TopMovies />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Movie />
                                    </Grid>
                                </Grid>
                                <ToggleThemeBtn />
                            </ProgressContextProvider>
                        </ThemeContextProvider>
                    </MovieContextProvider>
                </AuthContextProvider>
            </TopMovieContextProvider>
        </div>
    );
}

export default App;
