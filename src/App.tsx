import Navbar from './components/Navbar';
import './App.css';
import React from 'react';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';

function App() {
    return (
        <div>
            <ThemeContextProvider>
                <ProgressContextProvider>
                    <Navbar />
                    <ToggleThemeBtn />
                </ProgressContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
