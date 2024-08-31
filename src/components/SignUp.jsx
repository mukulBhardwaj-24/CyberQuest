// import { useState } from "react";

// function SignUp() {
//     return (
//         <>
//             <div className="flex items-center justify-center h-screen">
//                 <div className="relative w-full h-full">
//                     <div className="flex justify-center items-center absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("../images/cq_background.jpg")` }}></div>
//                     <div className="absolute inset-0 backdrop-blur-sm"></div>
//                     <SignupForm
//                         formtype="signup" />
//                 </div>
//             </div>
//         </>
//     )
// }

// function SignupForm() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const changeHandler = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');

//         try {
//             const response = await fetch('https://cyberquest.onrender.com/api/v1/auth/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.status === 200) {
//                 setSuccess(data.message);
//                 setFormData({
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: '',
//                 });
//             } else {
//                 setError(data.error);
//             }
//         } catch (error) {
//             setError('Something went wrong. Please try again.');
//         }
//     };

//     return (
//         <>
//             <div className="bg-transparent border border-black p-6 pt-30 pb-20 backdrop-blur-xl rounded-md absolute left-14 top-36">
//                 <form className="w-[450px]" onSubmit={submitHandler}>
//                     {/* first and last name */}
//                     <div className="flex justify-between gap-2">
//                         <label className="w-full flex flex-col items-start relative mt-1">
//                             <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
//                                 First Name<sup className="text-pink-500">*</sup>
//                             </p>
//                             <input
//                                 required
//                                 type="text"
//                                 name="firstName"
//                                 onChange={changeHandler}
//                                 placeholder="Enter First Name"
//                                 value={formData.firstName}
//                                 className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
//                             />
//                         </label>

//                         <label className="w-full flex flex-col items-start relative mt-1">
//                             <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
//                                 Last Name<sup className="text-pink-500">*</sup>
//                             </p>
//                             <input
//                                 required
//                                 type="text"
//                                 name="lastName"
//                                 onChange={changeHandler}
//                                 placeholder="Enter Last Name"
//                                 value={formData.lastName}
//                                 className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
//                             />
//                         </label>
//                     </div>

//                     {/* email */}
//                     <label className="flex flex-col items-start relative mt-2">
//                         <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
//                             Email Address<sup className="text-pink-500">*</sup>
//                         </p>
//                         <input
//                             required
//                             type="email"
//                             name="email"
//                             onChange={changeHandler}
//                             placeholder="Enter Email Address"
//                             value={formData.email}
//                             className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
//                         />
//                     </label>

//                     {/* create password */}
//                     <div className="flex justify-between gap-2">
//                         <label className="w-full flex flex-col items-start relative mt-2">
//                             <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
//                                 Create Password<sup className="text-pink-500">*</sup>
//                             </p>
//                             <input
//                                 required
//                                 type="password"
//                                 name="password"
//                                 onChange={changeHandler}
//                                 placeholder="Enter Password"
//                                 value={formData.password}
//                                 className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
//                             />
//                         </label>

//                         <label className="w-full flex flex-col items-start relative mt-2">
//                             <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
//                                 Confirm Password<sup className="text-pink-500">*</sup>
//                             </p>
//                             <input
//                                 required
//                                 type="password"
//                                 name="confirmPassword"
//                                 onChange={changeHandler}
//                                 placeholder="Confirm Password"
//                                 value={formData.confirmPassword}
//                                 className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
//                             />
//                         </label>
//                     </div>

//                     {error && <p className="text-red-500 mt-2">{error}</p>}
//                     {success && <p className="text-green-500 mt-2">{success}</p>}

//                     <button
//                         type="submit"
//                         style={{ backgroundColor: "#2563eb" }}
//                         className="mt-5 w-full h-[50px] rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950 hover:text-white duration-200"
//                     >
//                         Create Account
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default SignUp;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

function SignUp() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        otp: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        accountType: "Student",
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const getOTP = async () => {
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch('https://cyberquest.onrender.com/api/v1/auth/sendotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email }),
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log("Toast is triggered")
                toast.success('OTP sent successfully');
                setStep(2);
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('Failed to send OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const verifyOTP = async () => {
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch('https://cyberquest.onrender.com/api/v1/auth/verifyotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email, otp: formData.otp }),
            });

            const data = await response.json();

            if (response.status === 200) {
                toast.success(`OTP verified successfully`);
                setStep(3);
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('Failed to verify OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);
    
        try {
            const signUpResponse = await fetch('https://cyberquest.onrender.com/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const signUpData = await signUpResponse.json();
            
            if (signUpResponse.status === 200) {
                // setSuccess(signUpData.message);
                toast.success(signUpData.message)
    
                // After successful signup, proceed to login
                const loginResponse = await fetch('https://cyberquest.onrender.com/api/v1/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: formData.email, password: formData.password }),
                });
    
                const loginData = await loginResponse.json();
                
                if (loginResponse.status === 200) {
                    // Assume the response contains a token
                    const token = loginData.token;
    
                    // Store the token in localStorage or a context (for persistent login)
                    localStorage.setItem('authToken', token);
    
                    // Redirect to the home page or dashboard
                    navigate('/home');
                } else {
                    setError('Login failed after signup. Please try logging in manually.');
                }
            } else {
                setError(signUpData.error);
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-full h-full">
                <div className="flex justify-center items-center absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("../images/cq_background.jpg")` }}></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <div className="bg-transparent border border-black p-6 pt-30 pb-20 backdrop-blur-xl rounded-md absolute left-14 top-36">
                    <form className="w-[450px]" onSubmit={submitHandler}>
                        {step === 1 && (
                            <>
                                <label className="flex flex-col items-start relative mt-2">
                                    <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                                        Email Address<sup className="text-pink-500">*</sup>
                                    </p>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        onChange={changeHandler}
                                        placeholder="Enter Email Address"
                                        value={formData.email}
                                        className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                                    />
                                </label>
                                <button
                                    type="button"
                                    onClick={getOTP}
                                    disabled={isLoading}
                                    style={{ backgroundColor: "#2563eb" }}
                                    className="mt-5 w-[150px] h-[50px] rounded-[8px] font-medium text-white px-[10px] py-[10px] border-2 border-gray-950 hover:bg-blue-700 duration-200 disabled:opacity-50"
                                >
                                    {isLoading ? 'Sending OTP...' : 'Get OTP'}
                                </button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <label className="flex flex-col items-start relative mt-2 gap-4">
                                    <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                                        OTP<sup className="text-pink-500">*</sup>
                                    </p>
                                    <input
                                        required
                                        type="text"
                                        name="otp"
                                        onChange={changeHandler}
                                        placeholder="Enter OTP"
                                        value={formData.otp}
                                        className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                                    />
                                    <br />
                                </label>
                                <div className="flex justify-between gap-4 px-8">
                                    <button
                                        type="button"
                                        onClick={verifyOTP}
                                        disabled={isLoading || formData.otp.length === 0}
                                        style={{ backgroundColor: "#2563eb" }}
                                        className="w-[150px] h-[50px] rounded-[8px] font-medium text-white px-[10px] py-[10px] border-2 border-gray-950 hover:bg-blue-700 duration-200 disabled:opacity-50"
                                    >
                                        {isLoading ? 'Verifying OTP...' : 'Next'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={getOTP}
                                        disabled={isLoading}
                                        style={{ backgroundColor: "#2563eb" }}
                                        className="w-[150px] h-[50px] rounded-[8px] font-medium text-white px-[10px] py-[10px] border-2 border-gray-950 hover:bg-blue-700 duration-200 disabled:opacity-50"
                                    >
                                        {isLoading ? 'Sending OTP...' : 'Resend OTP'}
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <div className="flex justify-between gap-2">
                                    <label className="w-full flex flex-col items-start relative mt-1">
                                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                                            First Name<sup className="text-pink-500">*</sup>
                                        </p>
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            onChange={changeHandler}
                                            placeholder="Enter First Name"
                                            value={formData.firstName}
                                            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                                        />
                                    </label>

                                    <label className="w-full flex flex-col items-start relative mt-1">
                                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                                            Last Name<sup className="text-pink-500">*</sup>
                                        </p>
                                        <input
                                            required
                                            type="text"
                                            name="lastName"
                                            onChange={changeHandler}
                                            placeholder="Enter Last Name"
                                            value={formData.lastName}
                                            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                                        />
                                    </label>
                                </div>

                                <div className="flex justify-between gap-2">
                                    <label className="w-full flex flex-col items-start relative mt-2">
                                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                                            Create Password<sup className="text-pink-500">*</sup>
                                        </p>
                                        <input
                                            required
                                            type="password"
                                            name="password"
                                            onChange={changeHandler}
                                            placeholder="Enter Password"
                                            value={formData.password}
                                            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                                        />
                                    </label>

                                    <label className="w-full flex flex-col items-start relative mt-2">
                                        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                                            Confirm Password<sup className="text-pink-500">*</sup>
                                        </p>
                                        <input
                                            required
                                            type="password"
                                            name="confirmPassword"
                                            onChange={changeHandler}
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
                                        />
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    style={{ backgroundColor: "#2563eb" }}
                                    className="mt-5 w-full h-[50px] rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950 hover:text-white duration-200 disabled:opacity-50"
                                >
                                    {isLoading ? 'Signing Up...' : 'Get Started'}
                                </button>
                            </>
                        )}

                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
