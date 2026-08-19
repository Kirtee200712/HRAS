import { createContext, useContext, useState, useEffect } from 'react';
import api from './api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hydrate user state from token/localStorage on mount
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (storedUser && token) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                // Save user metadata (don't save passwords)
                const userData = { email: response.data.email, name: response.data.name, role: response.data.role };
                localStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                return;
            }
            throw new Error("Invalid token received");
        } catch (error) {
            console.error("Login Error", error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/login';
    };

    if (loading) {
        return <div className="h-screen w-screen flex items-center justify-center bg-background text-foreground">Authenticating...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
