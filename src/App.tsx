import Navbar from './components/Navbar';
import './App.css';
import React from 'react';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import Movie from './components/Movie';

function App() {
    return (
        <div>
            <MovieContextProvider>
                <ThemeContextProvider>
                    <ProgressContextProvider>
                        <Navbar />
                        <Movie />
                        <ToggleThemeBtn />
                    </ProgressContextProvider>
                </ThemeContextProvider>
            </MovieContextProvider>
        </div>
    );
}

export default App;
