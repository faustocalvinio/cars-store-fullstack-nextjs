"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
         });

         if (!response.ok) {
            const data = await response.json();
            console.log(data);
            setErrorMessage(data.error || "Login failed");
            toast.error(errorMessage);
            return;
         }
         toast.success("Login successful!");
         return;
      } catch (error) {
         console.error("Error:", error);
      }
   };

   return (
      <>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
               <h2 className="text-2xl font-bold text-center text-gray-800">
                  Login
               </h2>
               <form className="space-y-4" onSubmit={handleSubmit}>
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
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                     Login
                  </button>
               </form>
            </div>
         </div>
         <Toaster />
      </>
   );
};

export default LoginPage;
