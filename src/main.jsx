
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './Layout'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { UserProvider } from './context/UserContext'
import ConceptPage from './components/ConceptPage'
import CyberQuestBlogCards from "./components/Blog"
import AdminDashboard from './components/AdminDashboard'
import EditProfilePage from './components/EditProfile'
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "home",
        element: <ProtectedRoute element={<Home />} />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "profile",
        element: <ProtectedRoute element={<Profile />} />
      },
      {
        path: "concept/:conceptId", 
        element: <ProtectedRoute element={<ConceptPage />} />
      },
      {
        path: "blog",
        element: <CyberQuestBlogCards />
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />
      },
      {
        path: "edit-profile",
        element: <EditProfilePage />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <UserProvider>
    <Toaster />
      <RouterProvider router={router} />
    </UserProvider>
  </AuthProvider>
)

