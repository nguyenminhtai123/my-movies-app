import { TopMovieActionType } from './types';

interface TopMovie {
    imdbID: string;
    Title: string;
    Watched: boolean;
}

export type TopMovieState = TopMovie[];

const { GET_TOP_MOVIE, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

type TopMovieAction =
    | {
          type: typeof GET_TOP_MOVIE;
          payload: TopMovie[];
      }
    | {
          type: typeof TOGGLE_TOP_MOVIE_WATCHED;
          payload: string;
      };

export const topMovieReducer = (state: TopMovieState, action: TopMovieAction) => {
    switch (action.type) {
        case GET_TOP_MOVIE:
            return action.payload;

        case TOGGLE_TOP_MOVIE_WATCHED:
            return state.map((topMovie) =>
                topMovie.imdbID === action.payload ? { ...topMovie, Watched: !topMovie.Watched } : topMovie,
            );

        default:
            return state;
    }
};
