import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface MovieContextProps {
    children: ReactNode;
}

interface Movie {
    title: string;
    id: string;
}

interface MovieContextDefault {
    movies: Movie[];
    addMovie: (title: string) => void;
    deleteMovie: (id: string) => void;
}

const MovieContextDefaultData = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(MovieContextDefaultData);

const MovieContextProvider = ({ children }: MovieContextProps) => {
    const [movies, setMovie] = useState<Movie[]>(MovieContextDefaultData.movies);

    const addMovie = (title: string) => setMovie([...movies, { id: uuidv4(), title }]);

    const deleteMovie = (id: string) => setMovie(movies.filter((movie) => movie.id !== id));

    const MovieContextData = { movies, addMovie, deleteMovie };

    return <MovieContext.Provider value={MovieContextData}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
