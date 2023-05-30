import { createContext, ReactNode, useReducer } from 'react';
import { authReducer, AuthState } from '../reducers/AuthReducer';
import { AuthActionType } from '../reducers/types';

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextDefault {
    authInfo: AuthState;
    toggleAuth: (username: string) => void;
}

const AuthDefault: AuthState = {
    isAuthenticated: false,
    username: '',
};

export const AuthContext = createContext<AuthContextDefault>({
    authInfo: AuthDefault,
    toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
    const [authInfo, dispatch] = useReducer(authReducer, AuthDefault);

    const toggleAuth = (username: string) => {
        dispatch({ type: AuthActionType.TOGGLE_AUTH, payload: username });
    };
    const authContextData = {
        authInfo,
        toggleAuth,
    };
    return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
