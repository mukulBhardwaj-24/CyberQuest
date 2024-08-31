import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

export const useData = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsAuthenticated(true);
        }
    }, [setIsAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) {
            const token = localStorage.getItem("authToken");
            const fetchUserData = async () => {
                try {
                    const response = await fetch("https://cyberquest.onrender.com/api/v1/profile/getUserDetails", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Authorization": `Bearer ${token}` // Send token in Authorization header
                        }
                    });
                    const data = await response.json();
                    if (data.success) {
                        setUserData(data.data);
                    } else {
                        console.error('Failed to fetch user data:', data.message);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                } finally {
                    setLoading(false); // Set loading to false after data is fetched
                }
            };
            fetchUserData();
        } else {
            setLoading(false); // Set loading to false if not authenticated
        }
    }, [isAuthenticated]);

    // Conditionally render children based on loading state
    if (loading) {
        return <div>Loading...</div>; // Or you can return null or a spinner
    }

    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    );
};
