"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NewCarPage() {
   // const [errorMessage, setErrorMessage] = useState("");
   const [formData, setFormData] = useState({
      model: "",
      brand: "",
      year: "",
      price: "",
      description: "",
      images: "",
      fuelType: "",
      mileage: "",
      transmission: "",
      color: "",
      location: "",
      hp: "",
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
               hp: Number(formData.hp),
               mileage: Number(formData.mileage),
               images: formData.images.split(",").map((image) => image.trim()),
            }),
         });
         if (response.ok) {
            console.log("Car added successfully!");
            toast.success("Car added successfully!");
         } else {
            console.log("Error adding car.");
            // const errorData = await response.json();
            toast.error("Error adding car.");
         }
      } catch (error) {
         console.error("Request failed", error);
      }
   };

   return (
      <>
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
                  
                  <input
                     type="text"
                     name="description"
                     placeholder="Description"
                     onChange={handleChange}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {/* <input
                     type="text"
                     name="images"
                     placeholder="Images (comma-separated URLs)"
                     onChange={handleChange}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  /> */}
                  <input
                     type="file"
                     name="images"
                     multiple
                     accept="image/*"
                     onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                           const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
                           setFormData({ ...formData, images: fileArray.join(",") });
                        }
                     }}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                     name="fuelType"
                     onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                     <option value="">Fuel Type</option>
                     <option value="petrol">Petrol</option>
                     <option value="diesel">Diesel</option>
                     <option value="electric">Electric</option>
                     <option value="hybrid">Hybrid</option>
                  </select>
                  <input
                     type="number"
                     name="mileage"
                     placeholder="Mileage"
                     onChange={handleChange}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                     name="transmission"
                     onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                     <option value="">Transmission</option>
                     <option value="manual">Manual</option>
                     <option value="automatic">Automatic</option>
                  </select>
                  <input
                     type="text"
                     name="color"
                     placeholder="Color"
                     onChange={handleChange}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                     type="text"
                     name="location"
                     placeholder="Location"
                     onChange={handleChange}
                     required
                     className="w-full text-gray-700 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                     type="number"
                     name="hp"
                     placeholder="Horsepower (HP)"
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
         <Toaster />
      </>
   );
}
