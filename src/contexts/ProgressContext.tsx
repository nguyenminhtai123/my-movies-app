import { createContext, ReactNode } from 'react';

interface ProgressContextProviderProps {
    children: ReactNode;
}

interface ProgressContextDefault {
    lastTime: String;
    status: String;
}

const progressDefault = {
    lastTime: '29/5/2023',
    status: 'In progress',
};

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({ children }: ProgressContextProviderProps) => {
    return <ProgressContext.Provider value={progressDefault}>{children}</ProgressContext.Provider>;
};

export default ProgressContextProvider;
