"use client";
import { useCarsHook } from "@/hooks/useCars";
import { Toaster } from "react-hot-toast";
import { AdminCarItem } from "./AdminCarItem";

export const AdminCarsList = () => {
   const { cars } = useCarsHook();
   function seedCars() {
      fetch("/api/cars/seed", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      })
         .then((response) => response.json())
         .then((data) => console.log(data))
         .catch((error) => console.error("Error:", error));
   }

   return (
      <>
         <button
            onClick={seedCars}
            className="bg-blue-500 text-white px-4 py-2 rounded"
         >
            Seed
         </button>
         {cars.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-200">
               <thead>
                  <tr className="text-black">
                     {/* <th className="py-2 px-4 border-b">ID</th> */}
                     <th className="py-2 px-4 border-b">Image</th>
                     <th className="py-2 px-4 border-b">Make</th>
                     <th className="py-2 px-4 border-b">Model</th>
                     <th className="py-2 px-4 border-b">Year</th>
                     <th className="py-2 px-4 border-b">Price</th>
                     <th className="py-2 px-4 border-b">Mileage</th>
                     {/* <th className="py-2 px-4 border-b">Description</th> */}
                     {/* <th className="py-2 px-4 border-b">Created At</th> */}
                     {/* <th className="py-2 px-4 border-b">Updated At</th> */}
                     <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {cars.map((car) => (
                     <AdminCarItem car={car} key={car.id} />
                  ))}
               </tbody>
            </table>
         ) : (
            <p>No cars available.</p>
         )}
         <Toaster />
      </>
   );
};
