import { createContext } from 'react';

const TokenContext = createContext({
    token: "",
    setToken: (token) => {},
    user: {},
    setUser: (user) => {},
})

export default TokenContext;
