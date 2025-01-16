import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
    user: string | null;
    login: (userData: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    const loadUserData = async () => {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
        }
    };

    const login = async (userData: string) => {
        setUser(userData);
        await AsyncStorage.setItem('user', userData);
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    };

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
