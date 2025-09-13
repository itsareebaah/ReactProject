import React, { useContext, useState } from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';

const Login = () => {
  const { login }= useContext(AuthContext)
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log('Sending login data:', data);
      const res = await fetch("http://127.0.0.1:8000/api/authenticate",{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors'
      });
      
      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);

      // Check if the response is ok (status 200-299)
      if (!res.ok) {
        // Log the response text for debugging
        const responseText = await res.text();
        console.log('Error response body:', responseText);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // Check if the response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const result = await res.json();

      if(result.status == false){
        toast.error(result.message)
      } else{
        const userinfo ={
          id: result.id,
          token: result.token
        }
        localStorage.setItem('userinfo', JSON.stringify(userinfo));
        login(userinfo);
        navigate('/Dashboard')
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Header />
      <div className="login-wrapper d-flex align-items-center justify-content-center my-5">
        <div className="login-card shadow-lg rounded-4 p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: "#3F51B5" }}>Welcome Back</h2>
            <p className="text-muted">Login to continue with <span style={{ color: "#673AB7" }}>Codeware Digital</span></p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input 
                {...register('email', {
                  required:"This field is required",
                  pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Invaid email address"
                  }
                })}
                type="email" 
                placeholder="Enter your email" 
                className={`form-control form-control-lg rounded-3 ${errors.email ? "is-invalid" : ""}`}               
              />
              {
                errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
              }
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input {...register ('password',{
                required:"This is required field"
              })}
                type="password" 
                placeholder="Enter your password" 
                className={`form-control form-control-lg rounded-3 ${errors.password ? "is-invalid" : ""}`}
              />
              {
                errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>
              }
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" id="remember" className="form-check-input me-2"/>
                <label htmlFor="remember" className="form-check-label">Remember Me</label>
              </div>
              <a href="#" className="text-decoration-none" style={{ color: "#3F51B5" }}>Forgot Password?</a>
            </div>

            <button 
              className="btn w-100 py-2 fw-bold text-white rounded-3" 
              style={{ background: "linear-gradient(90deg,#3F51B5,#673AB7)" }}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-muted">
              Don’t have an account? <a href="#" style={{ color: "#673AB7" }}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
