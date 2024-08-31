import "../App.css"
import { useEffect, useState } from "react";
// import ProgressBar from "./ProgressBar";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// function Home() {
//     const [concepts, setConcepts] = useState([]);
//     const { isAuthenticated, setIsAuthenticated } = useAuth();
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(true); // Add a loading state
//     const {userData} = useData();
//     console.log(userData)

//     useEffect(() => {
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             setIsAuthenticated(true);
//         } else {
//             setIsAuthenticated(false);
//             navigate('/login'); // Redirect to login if not authenticated
//         }
//         setLoading(false); // Set loading to false once check is done
//     }, [setIsAuthenticated, navigate]);

//     useEffect(() => {
//         const fetchConcepts = async () => {
//             const token = localStorage.getItem("authToken");
//             if (token) {
//                 try {
//                     const response = await fetch("https://cyberquest.onrender.com/api/v1/content/getAllConcepts", {
//                         method: "GET",
//                         credentials: "include",
//                         headers: {
//                             "Authorization": `Bearer ${token}` // Send token in Authorization header
//                         }
//                     });
//                     const data = await response.json();
//                     if (data.success) {
//                         setConcepts(data.data);
//                     } else {
//                         console.error('Failed to fetch concepts:', data.message);
//                     }
//                 } catch (error) {
//                     console.error('Error fetching concepts:', error);
//                 }
//             }
//         };

//         if (isAuthenticated) {  // Only fetch concepts if authenticated
//             fetchConcepts();
//         }
//     }, [isAuthenticated]);

//     if (loading) {
//         return <div>Loading...</div>; // Show loading state while authentication is being verified
//     }

//     return (
//         <div className="testimonial-container">
//             <div className="testimonial-content">
//                 <h2 className="testimonial-title">
//                     [Concepts]
//                     <div className="testimonial-grid">
//                         {concepts.map((concept, index) => (
//                             <Link key={index} to={`/concept/${userData._id}`}>
//                                 <div className="testimonial-card">
//                                     <div className="testimonial-text">
//                                         <b>{concept.description}</b>
//                                         <div className="testimonial-avatar flex justify-around">
//                                             <h1 className="font-medium text-lg text-customGray hover:text-customBlue p-1 flex items-center h-full">
//                                                 {concept.conceptName}
//                                             </h1>
//                                             <div>
//                                                 <ProgressBar />
//                                                 <span><b>({index + 1}/{concepts.length})</b></span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>

//                         ))}
//                     </div>
//                 </h2>
//             </div>
//         </div>
//     );
// }

// export default Home;




// function Home() {
//     return (
//         <>
//             <div className="testimonial-container">
//                     <div className="testimonial-content">
//                         <h2 className="testimonial-title" >
//                             [Concepts]
//                         </h2>
//                         <div className="testimonial-grid">
//                             {/* <!-- card 1 --> */}
//                             <div className="testimonial-card">
//                                 <div className="testimonial-text">
//                                 <b>"HTML injection is a type of injection vulnerability that occurs when a user is able to control an input point and is able to inject arbitrary HTML code into a vulnerable web page. This vulnerability can have many consequences, like disclosure of a user’s session cookies that could be used to impersonate the victim, or, more generally, it can allow the attacker to modify the page content seen by the victims."</b>
//                                 </div>
//                                 <div className="testimonial-avatar flex justify-around">
//                                     {/* <img src="./images/avatar1.png" className="border-black border-2" /> */}
//                                     <h1 className="font-medium text-lg text-customGray hover:text-customBlue p-1 flex items-center h-full">HTML INJECTION</h1>
//                                     <div>
//                                         <ProgressBar />
//                                         <span><b>(1/4)</b></span>
//                                     </div>
//                                 </div>
//                                 {/* <div className="testimonial-details">
//                                     <h3 className="testimonial-name">
//                                         Sarah Johnson
//                                     </h3>
//                                     <p className="testimonial-desc">
//                                         8th Grade English Teacher
//                                     </p>
//                                 </div> */}
//                             </div>
//                             {/* <!-- card 2 --> */}
//                             <div className="testimonial-card">
//                                 <div className="testimonial-text">
//                                 <b>"Insecure Direct Object Reference (IDOR) is a vulnerability that arises when attackers can access or modify objects by manipulating identifiers used in a web application's URLs or parameters. It occurs due to missing access control checks, which fail to verify whether a user should be allowed to access specific data."</b>
//                                 </div>
//                                 <div className="testimonial-avatar flex justify-around">
//                                     {/* <img src="./images/avatar2.png" /> */}
//                                     <h1 className="font-medium text-lg text-customGray hover:text-customBlue p-1 flex items-center h-full">IDOR</h1>
//                                     <div>
//                                         <ProgressBar />
//                                         <span><b>(2/4)</b></span>
//                                     </div>
//                                 </div>
//                                 {/* <div className="testimonial-details">
//                                     <h3 className="testimonial-name">
//                                         Sarah Johnson
//                                     </h3>
//                                     <p className="testimonial-desc">
//                                         8th Grade English Teacher
//                                     </p>
//                                 </div> */}
//                             </div>
//                             {/* <!-- card 3 --> */}
//                             <div className="testimonial-card">
//                                 <div className="testimonial-text">
//                                 <b>"Cross-site scripting (XSS) is a type of security vulnerability commonly found in web applications. It allows attackers to inject malicious scripts into webpages viewed by other users. These scripts can then execute in the context of the user's browser, potentially leading to a variety of harmful effects, such as stealing sensitive information, manipulating webpage content, or performing actions on behalf of the user without their consent."</b>
//                                 </div>
//                                 <div className="testimonial-avatar flex justify-center justify-items-center">
//                                     {/* <img src="./images/avatar3.png" /> */}
//                                     <h1 className="font-medium text-lg text-customGray hover:text-customBlue p-1">Cross-site scripting (XSS)</h1>
//                                 </div>
//                                 {/* <div className="testimonial-details">
//                                     <h3 className="testimonial-name">
//                                         Sarah Johnson
//                                     </h3>
//                                     <p className="testimonial-desc">
//                                         8th Grade English Teacher
//                                     </p>
//                                 </div> */}
//                             </div>
//                             <div className="testimonial-card">
//                                 <div className="testimonial-text">
//                                 <b>"Business Logic Vulnerability refers to a type of security weakness in an application where the functionality deviates from the intended behavior due to flaws in the business logic implementation. Unlike traditional security vulnerabilities, which often exploit technical weaknesses, business logic vulnerabilities exploit the design and workflow of the application."</b>
//                                 </div>
//                                 <div className="testimonial-avatar flex justify-center justify-items-center">
//                                     {/* <img src="./images/avatar3.png" /> */}
//                                     <h1 className="font-medium text-lg text-customGray hover:text-customBlue p-1">Business Logic Vulnerability</h1>
//                                 </div>
//                                 {/* <div className="testimonial-details">
//                                     <h3 className="testimonial-name">
//                                         Sarah Johnson
//                                     </h3>
//                                     <p className="testimonial-desc">
//                                         8th Grade English Teacher
//                                     </p>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </>
//     )
// }


// const concepts = [
//   {
//     conceptName: 'Advanced JavaScript Techniques',
//     description: 'Dive deep into JavaScript\'s advanced features including closures, prototypes, and asynchronous programming patterns. Explore modern ES6+ syntax, functional programming concepts, and how to leverage these powerful tools to write cleaner, more efficient code.',
//     progress: 75
//   },
//   {
//     conceptName: 'Full-Stack Web Development',
//     description: 'Master both front-end and back-end technologies to become a versatile full-stack developer. Learn to create responsive user interfaces with modern frameworks like React or Vue.js, design RESTful APIs, work with databases, and implement server-side logic.',
//     progress: 60
//   },
//   {
//     conceptName: 'Cloud Computing and DevOps',
//     description: 'Explore the world of cloud computing platforms like AWS, Azure, or Google Cloud. Learn how to deploy, scale, and manage applications in the cloud. Dive into DevOps practices, including continuous integration and deployment (CI/CD), infrastructure as code, and container orchestration.',
//     progress: 45
//   },
//   {
//     conceptName: 'Machine Learning Fundamentals',
//     description: 'Delve into the exciting field of machine learning. Study core concepts like supervised and unsupervised learning, neural networks, and deep learning. Learn to use popular ML libraries and frameworks such as TensorFlow or PyTorch.',
//     progress: 30
//   },
//   {
//     conceptName: 'Cybersecurity Essentials',
//     description: 'Gain a comprehensive understanding of cybersecurity principles and practices. Learn about common vulnerabilities, encryption techniques, secure coding practices, and ethical hacking. Explore network security, web application security, and mobile security.',
//     progress: 55
//   },
//   {
//     conceptName: 'Blockchain Technology',
//     description: 'Uncover the revolutionary potential of blockchain technology. Study the fundamentals of distributed ledger systems, consensus mechanisms, and smart contracts. Learn about cryptocurrencies, decentralized applications (DApps), and the Ethereum ecosystem.',
//     progress: 20
//   },
// ];

import { BarChart, Bar } from 'recharts';

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
};

const truncateText = (text, maxLength) => 
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

const ProgressBar = ({ progress, color }) => {
  const data = [{ value: progress }];
  return (
    <BarChart width={100} height={8} data={data}>
      <Bar dataKey="value" fill={color} radius={[4, 4, 4, 4]} />
    </BarChart>
  );
};

function ConceptCard({ concept }) {
  const color = getRandomColor();
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">
            {concept.conceptName}
          </h3>
        </div>
        <p className="text-gray-600 mb-4 h-24">
          {truncateText(concept.description, 150)}
        </p>
        <div className="w-full">
          <ProgressBar progress={concept.progress} color={color} />
        </div>
      </div>
      <div className="h-1" style={{ backgroundColor: color }}></div>
    </div>
  );
}

function Home() {
    const [concepts, setConcepts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const {userData} = useData();
    console.log(userData);
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setIsAuthenticated(false);
        navigate('/login');
      } else {
        setIsAuthenticated(true);
      }
    }, [setIsAuthenticated, navigate]);
  
    useEffect(() => {
      const fetchConcepts = async () => {
        const token = localStorage.getItem("authToken");
        if (token) {
          try {
            const response = await fetch("https://cyberquest.onrender.com/api/v1/content/getAllConcepts", {
              method: "GET",
              credentials: "include",
              headers: {
                "Authorization": `Bearer ${token}`,
              },
            });
            const data = await response.json();
            if (data.success) {
              setConcepts(data.data);
            } else {
              console.error('Failed to fetch concepts:', data.message);
            }
          } catch (error) {
            console.error('Error fetching concepts:', error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      if (isAuthenticated) {
        fetchConcepts();
      }
    }, [isAuthenticated]);
  
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          );
    }
    console.log(concepts);
  
    return (
      <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
          Learning Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <Link key={index} to={`/concept/${concept._id}`}>
            <ConceptCard key={index} concept={concept} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default Home;

