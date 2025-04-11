/* eslint-disable @next/next/no-img-element */
import { useCarsHook } from "@/hooks/useCars";
import { Car } from "@/interfaces/car.interface";
import React from "react";
import toast from "react-hot-toast";

export const AdminCarItem: React.FC<{ car: Car }> = ({ car }) => {
   const { removeCar } = useCarsHook();
   async function deleteCarHandler(id: string) {
      const response = await fetch("/api/cars/delete", {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ id }),
      });
      if (!response.ok) {
         console.error("Failed to delete car");
         toast.error("Failed to delete car");
         return;
      }
      removeCar(id);
      toast.success("Car deleted successfully!");
      // Optionally, you can update the local state or refetch the cars after deletion
   }
   return (
      <tr className="text-gray-700" key={car.id}>
         <td className="py-2 px-4 border-b">
            <img alt={`image of an ${car.model}`} className="w-20" src={`${car.images[0]}`} />
         </td>
         <td className="py-2 px-4 border-b">{car.brand}</td>
         <td className="py-2 px-4 border-b">{car.model}</td>
         <td className="py-2 px-4 border-b">{car.year}</td>
            <td className="py-2 px-4 border-b">{car.price}</td>
            <td className="py-2 px-4 border-b">{car.mileage}</td>
         <td className="py-2 px-4 border-b ">
            <button
               onClick={() => deleteCarHandler(car.id!)}
               className="cursor-pointer hover:bg-red-700 bg-red-500 text-white px-4 py-1 rounded"
            >
               Delete
            </button>
         </td>
      </tr>
   );
};
