import Navbar from './components/Navbar';
import './App.css';
import React from 'react';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import Movie from './components/Movie';
import AuthContextProvider from './contexts/AuthContext';

function App() {
    return (
        <div>
            <AuthContextProvider>
                <MovieContextProvider>
                    <ThemeContextProvider>
                        <ProgressContextProvider>
                            <Navbar />
                            <Movie />
                            <ToggleThemeBtn />
                        </ProgressContextProvider>
                    </ThemeContextProvider>
                </MovieContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
