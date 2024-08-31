// const store = require("store2");

// const submit = async () => {
//     try {
//         // First request to log in and obtain the token
//         const response = await fetch("https://cyberquest.onrender.com/api/v1/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email: "mukulbhardwaj531@gmail.com",
//                 password: "1234"
//             })
//         });

//         if (!response.ok) {
//             console.log("Login failed with status:", response.status);
//             const errorText = await response.text();
//             console.log("Error response:", errorText);
//             return;
//         }

//         const data = await response.json();
//         const token = data.token; // Assuming the token is returned in the response
//         console.log("Token:", token);

//         if (data.success === true) {
//             // Second request to fetch concepts using the token in the Authorization header
            
//             };

//             ans();
//         }

//     } catch (error) {
//         console.log("Error in login request:", error);
//     }
// };

// submit();

// const submit = async () => {
//     const response = await fetch("https://cyberquest.onrender.com/api/v1/content/getAllConcepts")
//     const data = await response.json();
//     console.log(data);
// }
// submit();



    const ans = async () => {
        try {
            const token = localStorage.getItem("authToken");
            if(token) console.log("Token is there")
                else console.log("There is no token")
            const response = await fetch("https://cyberquest.onrender.com/api/v1/content/getAllConcepts", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${token}` // Send token in Authorization header
                }
            });
    
            if (!response.ok) {
                console.log("Fetching concepts failed with status:", response.status);
                const errorText = await response.text();
                console.log("Error response:", errorText);
                return;
            }
    
            const data = await response.json();
            console.log("Concepts:", data);
        } catch (error) {
            console.log("Error in fetching concepts:", error);
        }
    }
    
    ans();