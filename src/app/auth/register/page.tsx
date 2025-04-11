"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
   });

   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log(error, success);

      try {
         const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });


         const res = await response.json();
         console.log(res);
         if (res.error) {
            setError(res.error);
            toast.error(res.error);
            return;
         }
         if (res.newUser) {
            setSuccess("Registration successful!");
         }
         toast.success("Registration successful!");
         setTimeout(() => {
            window.location.replace("/");
         }, 3000);
         console.log(formData);
         
      } catch (err) {
         setError(err instanceof Error ? err.message : "Something went wrong");
         toast.error(error);
      }
   };
   return (
      <>
         <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
               <h2 className="text-2xl font-bold text-center text-gray-800">
                  Register
               </h2>
               <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                     <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="w-full  text-gray-600 px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                        onChange={handleChange}
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full px-4 text-gray-600  py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        onChange={handleChange}
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        className="w-full px-4  text-gray-600 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                        onChange={handleChange}
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                     Register
                  </button>
               </form>
               <p className="text-sm text-center text-gray-600">
                  Already have an account?{" "}
                  <a
                     href="/auth/login"
                     className="text-blue-600 hover:underline"
                  >
                     Login
                  </a>
               </p>
            </div>
         </div>
         <Toaster />
      </>
   );
};

export default RegisterPage;
