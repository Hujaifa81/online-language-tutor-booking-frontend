import React, { createContext } from 'react';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const values={

    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;