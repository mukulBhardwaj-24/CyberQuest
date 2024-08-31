import React, { useState, useEffect } from 'react';
import {

    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Button,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    Alert,
    AlertDescription,
    Input,
    Textarea,
    Label,
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    ConceptTable,
    QuestionTable
} from './DashboardComponents';
import { Edit, Trash2, Plus, Check, ChevronDown } from 'lucide-react';

import { toast } from 'react-hot-toast';


const API_BASE_URL = 'https://cyberquest.onrender.com/api/v1/content';
// const dummyConcepts = [
//   { id: 1, conceptName: "Web Security", description: "Fundamentals of web application security" },
//   { id: 2, conceptName: "Network Protocols", description: "Understanding common network protocols and their vulnerabilities" },
//   { id: 3, conceptName: "Cryptography", description: "Basic and advanced cryptographic concepts" },
// ];

// const dummyQuestions = [
//   { id: 1, title: "XSS Prevention", description: "How to prevent cross-site scripting attacks?", url: "https://example.com/xss", answer: "Use input validation and output encoding", difficulty: "medium", conceptId: 1 },
//   { id: 2, title: "SQL Injection", description: "What is SQL injection and how to prevent it?", url: "https://example.com/sql-injection", answer: "Use parameterized queries", difficulty: "hard", conceptId: 1 },
//   { id: 3, title: "TCP Handshake", description: "Explain the TCP three-way handshake", url: "https://example.com/tcp", answer: "SYN, SYN-ACK, ACK", difficulty: "easy", conceptId: 2 },
// ];

const AdminDashboard = () => {
    const [concepts, setConcepts] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [newConcept, setNewConcept] = useState({ conceptName: '', description: '' });
    const [newQuestion, setNewQuestion] = useState({
        _id: '',
        title: '',
        description: '',
        url: '',
        answer: '',
        difficulty: '',
        conceptId: '',
        conceptName: '',
    });
    const [editingConcept, setEditingConcept] = useState(null);
    const [editingQuestion, setEditingQuestion] = useState(null);
    const [message, setMessage] = useState('');
    const [isConceptDialogOpen, setIsConceptDialogOpen] = useState(false);
    const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false);
    const [selectedConcept, setSelectedConcept] = useState('');

    useEffect(() => {
        fetchConcepts();
        fetchQuestions();
    }, []);
    const token = localStorage.getItem("authToken");
    const fetchConcepts = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/getAllConcepts`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (data.success) {
                setConcepts(data.data);
                toast.success("Concepts fetched successfully!");
            } else {
                console.error('Failed to fetch concepts:', data.message);
                toast.error(`Failed to fetch concepts: ${data.message}`);
            }
        } catch (error) {
            console.error('Error fetching concepts:', error);
            toast.error('Failed to fetch concepts');
        }
    };
    const fetchQuestions = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/getAllQuestions`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            const data = await response.json();

            if (data.success) {
                // Transform the data as needed
                const transformedQuestions = data.data.flatMap(concept =>
                    concept.questionList.map(question => ({
                        conceptId: concept._id,
                        conceptName: concept.conceptName,
                        ...question            // Spread the question object with its inner _id
                    }))
                );

                console.log(transformedQuestions);
                setQuestions(transformedQuestions); // Set the transformed questions to state
            } else {
                console.error('Failed to fetch questions:', data.message);
                setMessage('Failed to fetch questions');
            }

        } catch (error) {
            console.error('Error fetching questions:', error);
            setMessage('Failed to fetch questions');
        }
    };


    const handleConceptChange = (e) => {
        const { name, value } = e.target;
        if (editingConcept) {
            setEditingConcept({ ...editingConcept, [name]: value });
        } else {
            setNewConcept({ ...newConcept, [name]: value });
        }
    };

    const handleQuestionChange = (e) => {
        const { name, value } = e.target;
        if (editingQuestion) {
            setEditingQuestion({ ...editingQuestion, [name]: value });
        } else {
            setNewQuestion({ ...newQuestion, [name]: value });
        }
    };

    const createConcept = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/createConcept`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newConcept),
            });
            const data = await response.json();
            if (data.success) {
                setConcepts([data.data, ...concepts]);
                setNewConcept({ conceptName: '', description: '' });
                toast.success('Concept created successfully!');
                setIsConceptDialogOpen(false);
            } else {
                console.error('Failed to create concept:', data.message);
                toast.error(`Failed to create concept: ${data.message}`);
            }
        } catch (error) {
            console.error('Error creating concept:', error);
            toast.error('Failed to create concept');
        }
    };


    const updateConcept = async () => {
        try {
            console.log(editingConcept);
            const response = await fetch(`${API_BASE_URL}/updateConcept`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    conceptId: editingConcept._id,
                    conceptName: editingConcept.conceptName,
                    description: editingConcept.description,
                    questionList: editingConcept.questionList
                })
            });

            const data = await response.json();

            if (data.success) {
                setConcepts(concepts.map(c => c._id === editingConcept._id ? data.data : c));
                setEditingConcept(null);
                setMessage('Concept updated successfully!');
                setIsConceptDialogOpen(false);
                alert("Concept updated successfully");
            } else {
                console.error('Failed to update concept:', data.message);
                setMessage(`Failed to update concept: ${data.message}`);
            }

        } catch (error) {
            console.error('Error updating concept:', error);
            setMessage('Failed to update concept');
        }
    };

    const deleteConcept = async (id) => {
        try {
            console.log("Here is your id of concept to delete :- " + id);
            const response = await fetch(`${API_BASE_URL}/deleteConcept`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ conceptId: id }),
            });

            const data = await response.json();

            if (data.success) {
                setConcepts(concepts.filter(c => c._id !== id));
                const updatedQuestions = questions.filter(q => q.conceptId !== id);
                setQuestions(updatedQuestions);
                setMessage('Concept deleted successfully!');
            } else {
                console.error('Failed to delete concept:', data.message);
                setMessage(`Failed to delete concept: ${data.message}`);
            }

        } catch (error) {
            console.error('Error deleting concept:', error);
            setMessage('Failed to delete concept');
        }
    };


    const createQuestion = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/createQuestion`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    conceptId: newQuestion.conceptId,
                    title: newQuestion.title,
                    description: newQuestion.description,
                    url: newQuestion.url,
                    answer: newQuestion.answer,
                    difficulty: newQuestion.difficulty,
                }),
            });

            const data = await response.json();
            console.log(data.data);
            if (data.success) {
                newQuestion._id = data.data._id;
                newQuestion.conceptName = selectedConcept.conceptName;
                console.log("The answer is -> ", newQuestion);
                setQuestions([newQuestion, ...questions]);
                // setQuestions([...questions, data.data]);
                setNewQuestion({
                    _id: '',
                    title: '',
                    description: '',
                    url: '',
                    answer: '',
                    difficulty: '',
                    conceptId: ''
                });
                setMessage('Question created successfully!');
                setIsQuestionDialogOpen(false);
            } else {
                console.error('Failed to create question:', data.message);
                setMessage(`Failed to create question: ${data.message}`);
            }

        } catch (error) {
            console.error('Error creating question:', error);
            setMessage('Failed to create question');
        }
    };

    const updateQuestion = async () => {
        try {
            // Ensure that `editingQuestion` contains all required fields
            const { _id, title, description, url, answer, difficulty } = editingQuestion;

            // Check if all required fields are present
            if (!title || !url || !answer || !difficulty || !description || !_id) {
                setMessage('All fields are required');
                return;
            }

            const response = await fetch(`${API_BASE_URL}/updateQuestion`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    questionId: _id,
                    title,
                    description,
                    url,
                    answer,
                    difficulty,
                }),
            });

            const data = await response.json();

            if (response.ok) {

                // setQuestions(questions.map(q => q._id === editingQuestion._id ? data.data : q));
                setQuestions(questions.map(q =>
                    q._id === editingQuestion._id
                        ? { ...data.data, conceptId: q.conceptId, conceptName: q.conceptName }
                        : q
                ));
                setEditingQuestion(null);
                setMessage('Question updated successfully!');
                setIsQuestionDialogOpen(false);
            } else {
                console.error('Error updating question:', data.message);
                setMessage('Failed to update question');
            }
        } catch (error) {
            console.error('Error updating question:', error);
            setMessage('Failed to update question');
        }
    };

    const deleteQuestion = async (question) => {
        try {
            const response = await fetch(`${API_BASE_URL}/deleteQuestion`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ questionId: question._id, conceptId: question.conceptId }),
            });

            const data = await response.json();

            // Check if the deletion was successful
            if (data.success) {
                // Filter out the deleted question from the questions state
                const updatedQuestions = questions.filter(q => q._id !== question._id);

                setQuestions(updatedQuestions);
                setMessage('Question deleted successfully!');
            } else {
                setMessage('Failed to delete question');
                alert('Failed to delete question');
            }
        } catch (error) {
            console.error('Error deleting question:', error);
            setMessage('Failed to delete question');
        }
    };



    return (
        <>
            <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold text-blue-600">CyberQuest Admin Dashboard</h1>

                {message && (
                    <Alert className="bg-green-100 border-green-400 text-green-700">
                        <AlertDescription>{message}</AlertDescription>
                    </Alert>
                )}

                <Tabs defaultValue="concepts" className="bg-white rounded-lg shadow-md">
                    <TabsList className="w-full border-b p-2">
                        <TabsTrigger value="concepts" className="px-4 py-2">Concepts</TabsTrigger>
                        <TabsTrigger value="questions" className="px-4 py-2">Questions</TabsTrigger>
                    </TabsList>

                    <TabsContent value="concepts" className="p-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-xl">Manage Concepts</CardTitle>
                                <Button onClick={() => { setEditingConcept(null); setIsConceptDialogOpen(true) }} className="bg-blue-500 text-white">
                                    <Plus size={20} /> Add Concept
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <ConceptTable
                                    data={concepts}
                                    onEdit={(concept) => { setEditingConcept(concept); setIsConceptDialogOpen(true); }}
                                    onDelete={(concept) => { deleteConcept(concept._id) }}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="questions" className="p-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-xl">Manage Questions</CardTitle>
                                <Button onClick={() => { setEditingQuestion(null); setIsQuestionDialogOpen(true) }} className="bg-blue-500 text-white">
                                    <Plus size={20} /> Add Question
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <QuestionTable
                                    data={questions}
                                    onEdit={(question) => { setEditingQuestion(question); setIsQuestionDialogOpen(true); }}
                                    onDelete={deleteQuestion}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Concept Dialog */}
                <Dialog open={isConceptDialogOpen} onOpenChange={setIsConceptDialogOpen}>
                    <DialogContent className="bg-white rounded-lg shadow-xl w-[90vw] max-w-[500px] max-h-[90vh] overflow-y-auto mx-auto my-auto">
                        <DialogHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
                            <DialogTitle className="text-xl font-bold">
                                {editingConcept ? 'Edit Concept' : 'Add Concept'}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 p-4">
                            <Label htmlFor="conceptName" className="text-gray-700 font-semibold">Concept Name</Label>
                            <Input
                                id="conceptName"
                                name="conceptName"
                                value={editingConcept ? editingConcept.conceptName : newConcept.conceptName}
                                onChange={handleConceptChange}
                                className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full"
                            />
                            <Label htmlFor="description" className="text-gray-700 font-semibold">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={editingConcept ? editingConcept.description : newConcept.description}
                                onChange={handleConceptChange}
                                className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full h-24"
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 p-4 rounded-b-lg">
                            <Button
                                onClick={editingConcept ? updateConcept : createConcept}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
                            >
                                {editingConcept ? 'Update Concept' : 'Add Concept'}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>


                {/* Question Dialog */}
                <Dialog open={isQuestionDialogOpen} onOpenChange={setIsQuestionDialogOpen}>
                    <DialogContent className="bg-white rounded-lg shadow-xl w-[90vw] max-w-[500px] max-h-[90vh] overflow-y-auto mx-auto my-auto">
                        <DialogHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
                            <DialogTitle className="text-xl font-bold">
                                {editingQuestion ? 'Edit Question' : 'Add Question'}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 p-4">
                            <Label htmlFor="title" className="text-gray-700 font-semibold">Question Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={editingQuestion ? editingQuestion.title : newQuestion.title}
                                onChange={handleQuestionChange}
                                className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full"
                            />
                            <Label htmlFor="description" className="text-gray-700 font-semibold">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={editingQuestion ? editingQuestion.description : newQuestion.description}
                                onChange={handleQuestionChange}
                                className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full h-24"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="url" className="text-gray-700 font-semibold">URL</Label>
                                    <Input
                                        id="url"
                                        name="url"
                                        value={editingQuestion ? editingQuestion.url : newQuestion.url}
                                        onChange={handleQuestionChange}
                                        className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="difficulty" className="text-gray-700 font-semibold">Difficulty</Label>
                                    <Select
                                        name="difficulty"
                                        value={editingQuestion ? editingQuestion.difficulty : newQuestion.difficulty}
                                        onValueChange={(value) => {
                                            if (editingQuestion)
                                                setEditingQuestion({ ...editingQuestion, difficulty: value })
                                            else
                                                setNewQuestion({ ...newQuestion, difficulty: value });
                                        }}
                                    >
                                        <SelectTrigger id="difficulty" className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full">
                                            <SelectValue placeholder="Select difficulty" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="easy">Easy</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="hard">Hard</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Label htmlFor="concept" className="text-gray-700 font-semibold">Concept</Label>
                            <Select
                                name="conceptId"
                                value={editingQuestion ? editingQuestion.conceptId : newQuestion.conceptId}
                                onValueChange={(value) => {
                                    // setSelectedConcept(value); // Update the selected concept
                                    const selectedConcept = concepts.find(concept => concept._id === value);
                                    setSelectedConcept(selectedConcept);
                                    if (editingQuestion)
                                        setEditingQuestion({ ...editingQuestion, conceptId: value })
                                    else
                                        setNewQuestion({ ...newQuestion, conceptId: value, conceptName: selectedConcept.conceptName }); // Update the conceptId for the new question
                                }}
                            >
                                <SelectTrigger
                                    id="conceptId"
                                    className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full"
                                >
                                    <SelectValue placeholder="Select a concept" />
                                </SelectTrigger>

                                <SelectContent className="bg-white">
                                    {concepts.map(concept => (
                                        <SelectItem
                                            key={concept._id}
                                            value={concept._id}
                                        >
                                            {concept.conceptName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Label htmlFor="answer" className="text-gray-700 font-semibold">Answer</Label>
                            <Textarea
                                id="answer"
                                name="answer"
                                value={editingQuestion ? editingQuestion.answer : newQuestion.answer}
                                onChange={handleQuestionChange}
                                className="border border-gray-300 focus:border-blue-500 rounded-md p-2 w-full h-24"
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 p-4 rounded-b-lg">
                            <Button
                                onClick={editingQuestion ? updateQuestion : createQuestion}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300"
                            >
                                {editingQuestion ? 'Update Question' : 'Add Question'}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>


            </div>
        </>
    );
};

export default AdminDashboard;
