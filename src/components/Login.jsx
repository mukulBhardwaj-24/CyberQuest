import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const MySwal = withReactContent(Swal);

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-full h-full">
        <div className="flex justify-center items-center absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("../images/cq_background.jpg")` }}></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <LoginForm formtype="login" />
      </div>
    </div>
  )
}

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://cyberquest.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // console.log(data);
        const token = data.token;
        const accountType = data.user.accountType; // assuming the backend sends this

        localStorage.setItem("authToken", token);
        localStorage.setItem("accountType", accountType);

        MySwal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          setIsAuthenticated(true);
          navigate("/home");
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Failed to login. Please try again.",
        });
      }
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-transparent border border-black p-6 bg-opacity-30 backdrop-blur-xl rounded-md absolute left-14 top-36 ">
      <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mt-6 items-start">
        <label className="w-full flex flex-col items-start">
          <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-0">
            Email Address <sup className="text-pink-500">*</sup>
          </p>

          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id..."
            name="email"
            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
          />
        </label>
        <label className="w-full flex flex-col items-start relative">
          <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-0">
            Password <sup className="text-pink-500">*</sup>
          </p>

          <input
            required
            type="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
          />

          <Link to="#">
            <p className="text-xs mt-1 text-blue-100 ml-[360px] hover:text-blue-400">
              Forgot Password
            </p>
          </Link>
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{ backgroundColor: "#2563eb" }}
          className="w-full rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950 hover:text-white duration-200"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <br />
      <div className="text-slate-200">
        Don&apos;t have an account?
        <Link to="/signup" style={{ color: "#2563eb" }}>Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
