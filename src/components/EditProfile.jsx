import React, { useState } from 'react';
import { useData } from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
    const { userData, setUserData } = useData();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        image: userData.image,
        dateOfBirth: userData.additionalDetails.dateOfBirth,
        about: userData.additionalDetails.about,
        contactNumber: userData.additionalDetails.contactNumber,
        gender: userData.additionalDetails.gender,
        linkedInUrl: userData.additionalDetails.linkedInUrl,
        githubUrl: userData.additionalDetails.githubUrl,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
            isValid = false;
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Invalid contact number';
            isValid = false;
        }

        if (formData.linkedInUrl && !/^https?:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/.test(formData.linkedInUrl)) {
            newErrors.linkedInUrl = 'Invalid LinkedIn URL';
            isValid = false;
        }

        if (formData.githubUrl && !/^https?:\/\/github\.com\/.*$/.test(formData.githubUrl)) {
            newErrors.githubUrl = 'Invalid GitHub URL';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (window.confirm('Are you sure you want to update your profile?')) {
            try {
                const response = await fetch('https://cyberquest.onrender.com/api/v1/profile/updateProfile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                if (data.success) {
                    setUserData(data.updatedUserDetails);
                    navigate('/profile');
                }
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        }
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                const response = await fetch('https://cyberquest.onrender.com/api/v1/profile/deleteProfile', {
                    method: 'DELETE',
                });

                const data = await response.json();
                if (data.success) {
                    // Handle successful account deletion (e.g., logout and redirect)
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error deleting account:', error);
            }
        }
    };

    return (
        <div className="edit-profile-page">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="image">Profile Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                    {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="about">About</label>
                    <textarea
                        id="about"
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                    {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedInUrl">LinkedIn URL</label>
                    <input
                        type="text"
                        id="linkedInUrl"
                        name="linkedInUrl"
                        value={formData.linkedInUrl}
                        onChange={handleChange}
                    />
                    {errors.linkedInUrl && <span className="error">{errors.linkedInUrl}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="githubUrl">GitHub URL</label>
                    <input
                        type="text"
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleChange}
                    />
                    {errors.githubUrl && <span className="error">{errors.githubUrl}</span>}
                </div>
                <button type="submit" className="update-profile-btn">Update Profile</button>
            </form>
            <button onClick={handleDeleteAccount} className="delete-account-btn">Delete Account</button>
        </div>
    );
};

export default EditProfilePage;