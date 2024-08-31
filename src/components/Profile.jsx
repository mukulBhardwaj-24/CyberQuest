import { useData } from "../context/UserContext.jsx"
import { FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {


    const { userData } = useData()

    if (!userData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="profile-page">
            <div className="profile-header relative">
                <img src={userData.image} alt="Profile" className="profile-image" />
                <h1>{userData.firstName} {userData.lastName}</h1>
                <div className="absolute top-2 right-2 "><FaUserEdit className="h-[30px] w-[40px] cursor-pointer"
                /></div>
            </div>
            <div className="profile-content">
                <div className="profile-left">
                    <div className="profile-section ">
                        <h2 className='about'>About</h2>
                        <p>{userData.additionalDetails.about}</p>
                    </div>
                    <div className="profile-section personal">
                        <h2>Personal Information</h2>
                        <div className="text-left p-4">
                            <p className="mb-2"><strong>Gender:</strong> {userData.additionalDetails.gender}</p>
                            <p className="mb-2"><strong>Date of Birth:</strong> {userData.additionalDetails.dateOfBirth}</p>
                            <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
                            <p className="mb-2"><strong>Phone:</strong> {userData.additionalDetails.contactNumber}</p>
                            <p className="mb-2"><strong>GitHub:</strong> {userData.additionalDetails.githubUrl}</p>
                            <p className="mb-2"><strong>LinkedIn:</strong> {userData.additionalDetails.linkedInUrl}</p>
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="profile-section challenges">
                        <h2>Challenges Solved</h2>
                        <ul className="challenges-list">
                            {userData.progress.map((progress, index) => (
                                <li key={index}>
                                    
                                    <ul className="questions-list">
                                        {progress.questionSolved.map((question, qIndex) => (
                                            <li key={qIndex}>
                                                {question.title}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;
