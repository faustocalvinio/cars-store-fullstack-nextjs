"use client";

import { useState } from "react";

export default function NewCarPage() {
   const [formData, setFormData] = useState({
      model: "",
      brand: "",
      year: "",
      price: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         const response = await fetch("/api/cars/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               ...formData,
               year: Number(formData.year),
               price: Number(formData.price),
            }),
         });
         if (response.ok) {
            alert("Car added successfully!");
         } else {
            alert("Error adding car.");
         }
      } catch (error) {
         console.error("Request failed", error);
      }
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
               Add a New Car
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
               <input
                  type="text"
                  name="model"
                  placeholder="Model"
                  onChange={handleChange}
                  required
                  className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  onChange={handleChange}
                  required
                  className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  onChange={handleChange}
                  required
                  className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                  required
                  className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               <button
                  type="submit"
                  className="w-full  bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
               >
                  Add Car
               </button>
            </form>
         </div>
      </div>
   );
}
