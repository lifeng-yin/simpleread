import { createContext } from 'react';

const TokenContext = createContext({
    token: "",
    setToken: (token) => {}
})

export default TokenContext;
