import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit =  (data) => {
    let user = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      password: data.password
    }

    const registerUser = async () => {
      try {
        const response =  await axios.post('http://localhost:3000/users/signup', user,{withCredentials: true})
        if (response.data.user) {
          localStorage.setItem('isLogin',true)
          navigate('/')
         }else{
          localStorage.removeItem('isLogin')
         }
          
    }catch (error) {
        console.log(error);
        alert("Error while registering user",error);
      }
      
    
  };

  registerUser();
}

    return (
        <div className="max-w-screen-2xl h-screen container mx-auto  px-4 md:px-20 bg-white text-black">
    <div className="flex flex-col items-start  md:items-center">
        <h1 className="text-3xl font-semibold my-12">Prime Book</h1>
       
        {/* <h1 className="text-xl font-medium my-4 ">Sign Up</h1> */}
            
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/3  mx-auto text-black ">
    
      <div className="mb-5 ">
        <label htmlFor="firstName" className="block  mb-2 text-sm font-medium text-gray-900 ">First Name</label>
        <input {...register("firstName", { required: true })} type="text" name="firstName" id="firstName" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder="Enter Your First Name" required />
      </div>
      <div className="mb-5 ">
        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
        <input {...register("lastName", { required: true })} type="text" name="lastName" id="lastName" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder="Enter Your Last Name" required />
      </div>
      <div className="mb-5 ">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input {...register("email", { required: true })} type="email" id="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder="name@primebook.com" required />
  
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
        <div className='flex items-center gap-x-2'>
        <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        <span className='scale-125'>
        {showPassword ? <FaEye onClick={() => setShowPassword(false)} /> : <FaEyeSlash  onClick={() => setShowPassword(true)} />}
        </span>
        </div>
      </div>

      
      {/* <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div> */}
    
      <div className="flex justify-between items-center">
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  cursor-pointer">Sign up</button>

  <NavLink to={'/login'} className=" mx-4 text-blue-600 hover:text-blue-700 duration-150">Login </NavLink>

    </div>
    
    </form>
    
    </div>
        </div>
      );
}

export default SignUp