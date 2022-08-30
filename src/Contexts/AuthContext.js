import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

// Acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, changeUser] = useState();
    const [loading, changeLoading] = useState(true);

    useEffect(() => {
        const cancelSubscription = onAuthStateChanged(auth, (user) => {
            changeUser(user);
            changeLoading(false);
        });

        return cancelSubscription;

    }, []);
    
    return (
        <AuthContext.Provider value={{user: user}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
 
export { AuthProvider, AuthContext, useAuth};
