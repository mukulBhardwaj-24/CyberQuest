import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard()
{
    // const navigate = useNavigate();
    // const { setIsAuthenticated } = useAuth();
    // useEffect(() => {
    //     const token = localStorage.getItem('authToken');
    //     if (token) {
    //         setIsAuthenticated(true);
    //     } else {
    //         setIsAuthenticated(false);
    //         navigate('/login'); // Redirect to login if not authenticated
    //     }
    // }, []);
    return (
        <>
            <div className="content">
                <section className="main-section">

                    <div className="content-left">
                        <p className="section-label">Very proud to introduce</p>
                        <h1 className="section-title">Seamless Learning for Brighter Futures</h1>
                        <p className="section-description">
                            Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve brighter futures. Join us on a transformative journey to simplify education and unlock your full potential.
                        </p>
                    </div>

                    <div className="content-right">

                        <div className="image-container">
                            <img src="../images/utilize-a-minimalist-and-stylish-wordmark-logo-des-xcGqBIKDTFGVcYpbIl9LpQ-ykxbbDGWSzO0ZbOof51YZQ.jpeg" alt="sectionImage" className="section-image" />
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard;