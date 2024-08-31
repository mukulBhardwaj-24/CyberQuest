import { createContext, useContext, useState, useEffect } from 'react';

const QuestionContext = createContext();

export const useQuestions = () => {
    return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('https://challenges-yvxh.onrender.com/api');
            const data = await response.json();
            setQuestions(data);
        };

        fetchQuestions();
    }, []);

    return (
        <QuestionContext.Provider value={questions}>
            {children}
        </QuestionContext.Provider>
    );
};

