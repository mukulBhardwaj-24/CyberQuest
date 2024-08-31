// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { ChevronRight, CheckCircle, XCircle } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';



// // Custom Card Components
// const Card = ({ children, className = "" }) => (
//   <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children }) => (
//   <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500">
//     {children}
//   </div>
// );

// const CardTitle = ({ children }) => (
//   <h3 className="text-xl font-semibold text-white">{children}</h3>
// );

// const CardContent = ({ children }) => (
//   <div className="px-6 py-4">
//     {children}
//   </div>
// );

// const CardDescription = ({ children }) => (
//   <p className="text-gray-600">{children}</p>
// );

// // Custom Badge Component
// const Badge = ({ children, className = "" }) => (
//   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
//     {children}
//   </span>
// );

// // Custom Progress Component
// const Progress = ({ value, className = "" }) => (
//   <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
//     <div
//       className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
//       style={{ width: `${value}%` }}
//     ></div>
//   </div>
// );

// // Utility function for difficulty colors
// const getDifficultyColor = (difficulty) => {
//   switch (difficulty.toLowerCase()) {
//     case 'easy': return 'bg-green-500 text-green-900';
//     case 'medium': return 'bg-yellow-500 text-yellow-900';
//     case 'hard': return 'bg-red-500 text-red-900';
//     default: return 'bg-gray-500 text-gray-900';
//   }
// };

// // Main ConceptPage Component
// const ConceptPage = () => {
//   const { conceptId } = useParams();
//   const [concept, setConcept] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const {isAuthenticated} = useAuth();

//   useEffect(() => {
//     if (isAuthenticated) {
//       const token = localStorage.getItem("authToken");
//       const fetchUserData = async () => {
//           try {
//               const response = await fetch("https://cyberquest.onrender.com/api/v1/content/getConceptDetailsWithProgress", {
//                   method: "POST",
//                   credentials: "include",
//                   headers: {
//                       "Authorization": `Bearer ${token}`,
//                       "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({ conceptId })
//               });
//               const data = await response.json();
//               if (data.success) {
//                   setConcept(data.data);
//                   console.log(data.data);
//               } else {
//                   console.error('Failed to fetch user data:', data.message);
//               }
//           } catch (error) {
//               console.error('Error fetching user data:', error);
//           } finally {
//               setLoading(false); // Set loading to false after data is fetched
//           }
//       };
//       fetchUserData();
//   } else {
//       setLoading(false); // Set loading to false if not authenticated
//   }
//     // // Simulating API call
//     // setTimeout(() => {
//     //   setConcept(dummyConceptData);
//     //   setLoading(false);
//     // }, 1000);
//   }, [conceptId, isAuthenticated]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8 font-inter">
//       <div className="max-w-4xl mx-auto">
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle>{concept.title}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-lg text-gray-700 mb-6">{concept.description}</p>
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Your Progress</h2>
//               <Progress value={concept.progress} className="mb-2" />
//               <p className="text-right text-gray-600">{concept.progress}% Complete</p>
//             </div>
//           </CardContent>
//         </Card>

//         <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Questions</h2>
//         <div className="space-y-4">
//           {concept.questions.map((question) => (
//             <Card key={question.id}>
//               <CardHeader>
//                 <div className="flex justify-between items-center">
//                   <CardTitle>{question.title}</CardTitle>
//                   <div className="flex space-x-2">
//                     <Badge className={getDifficultyColor(question.difficulty)}>
//                       {question.difficulty}
//                     </Badge>
//                     <Badge className={question.solved ? "bg-green-500 text-green-900" : "bg-gray-500 text-gray-900"}>
//                       {question.solved ? "Solved" : "Unsolved"}
//                     </Badge>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{question.description}</CardDescription>
//                 <div className="mt-4 flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     {question.solved ? (
//                       <CheckCircle className="text-green-500" size={20} />
//                     ) : (
//                       <XCircle className="text-red-500" size={20} />
//                     )}
//                     <span className={question.solved ? "text-green-500" : "text-red-500"}>
//                       {question.solved ? "Completed" : "Not completed"}
//                     </span>
//                   </div>
//                   <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
//                     <span>View Question</span>
//                     <ChevronRight size={16} />
//                   </button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConceptPage;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {toast} from 'react-hot-toast';

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-white">{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">
    {children}
  </div>
);

const CardDescription = ({ children }) => (
  <p className="text-gray-600">{children}</p>
);

// Custom Badge Component
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

// Custom Progress Component
const Progress = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
    <div
      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

// Utility function for difficulty colors
const getDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'easy': return 'bg-green-500 text-green-900';
    case 'medium': return 'bg-yellow-500 text-yellow-900';
    case 'hard': return 'bg-red-500 text-red-900';
    default: return 'bg-gray-500 text-gray-900';
  }
};

// Function to calculate progress percentage
const calculateProgress = (progressDetails, questionList) => {
  if (!progressDetails || !questionList || questionList.length === 0) return 0;
  const solvedCount = progressDetails.questionSolved.length;
  return Math.round((solvedCount / questionList.length) * 100);
};

// Main ConceptPage Component
const ConceptPage = () => {
  const { conceptId } = useParams();
  const [concept, setConcept] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  const [flagInputs, setFlagInputs] = useState({});
  const [flagStatuses, setFlagStatuses] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      const token = localStorage.getItem("authToken");
      const fetchConceptData = async () => {
        try {
          const response = await fetch("https://cyberquest.onrender.com/api/v1/content/getConceptDetailsWithProgress", {
            method: "POST",
            credentials: "include",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ conceptId })
          });
          const data = await response.json();
          if (data.success) {
            setConcept(data.data.conceptDetails);
            setProgress(data.data.progressDetails);
          } else {
            console.error('Failed to fetch concept data:', data.message);
          }
        } catch (error) {
          console.error('Error fetching concept data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchConceptData();
    } else {
      setLoading(false);
    }
  }, [conceptId, isAuthenticated]);

  const handleFlagSubmit = async (question, flag) => {
    if (flag === question.answer) {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch("https://cyberquest.onrender.com/api/v1/content/updateProgress", {
          method: "POST",
          credentials: "include",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ conceptId: conceptId, questionId: question._id })
        });
        const data = await response.json();
        console.log(data);
                if (response.sta) {
          toast.success("Challenge Submitted");
          setFlagStatuses((prev) => ({ ...prev, [question._id]: "correct" }));
        } else {
          toast.error('Failed to submit:', data.message);
        }
      } catch (error) {
        toast.error('Error updating progress:', error);
      }
    } else {
      setFlagStatuses((prev) => ({ ...prev, [question._id]: "incorrect" }));
      toast.error("Flag is incorrect. Please try again.");
    }
    setFlagInputs((prev) => ({ ...prev, [question._id]: "" }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  console.log(progress);

  if (!concept) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8 font-inter">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <p className="text-center text-xl text-gray-700">Concept not found or you don't have access to this content.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const progressPercentage = calculateProgress(progress, concept.questionList);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8 font-inter">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{concept.conceptName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-6">{concept.description}</p>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Your Progress</h2>
              <Progress value={progressPercentage} className="mb-2" />
              <p className="text-right text-gray-600">{progressPercentage}% Complete</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Questions</h2>
        <div className="space-y-4">
          {concept.questionList.map((question) => {
            const isSolved = progress!=null && progress.questionSolved.length!=0 && progress.questionSolved.map((s)=>{if(s._id==question._id){return true;}});
            console.log(isSolved);
            const flagInput = flagInputs[question._id] || "";
            const flagStatus = flagStatuses[question._id] || "";

            return (
              <Card key={question._id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{question.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Badge className={getDifficultyColor(question.difficulty)}>
                        {question.difficulty}
                      </Badge>
                      <Badge className={isSolved ? "bg-green-500 text-green-900" : "bg-gray-500 text-gray-900"}>
                        {isSolved ? "Solved" : "Unsolved"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{question.description}</CardDescription>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      {isSolved ? (
                        <CheckCircle className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
                      <span className={isSolved ? "text-green-500" : "text-red-500"}>
                        {isSolved ? "Completed" : "Not completed"}
                      </span>
                    </div>
                    <a href={question.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                      <span>View Question</span>
                      <ChevronRight size={16} />
                    </a>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter the flag"
                        value={flagInput}
                        onChange={(e) => setFlagInputs((prev) => ({ ...prev, [question._id]: e.target.value }))}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        onClick={() => handleFlagSubmit(question, flagInput)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-200"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConceptPage;
