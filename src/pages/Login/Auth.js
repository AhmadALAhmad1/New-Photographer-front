import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const login = () => {
        setIsAdmin(true);
        window.localStorage.setItem('role', 'admin');
    };

    const logout = () => {
        setIsAdmin(false);
        window.localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default () => useContext(AuthContext);
