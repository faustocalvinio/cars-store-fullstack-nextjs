import { Car } from "@/interfaces/car.interface";
import { useEffect, useState } from "react";

export const useCarsHook = () => {
   const [cars, setCars] = useState<Car[]>([]);

   useEffect(() => {
      const fetchCars = async () => {
         try {
            const response = await fetch("/api/cars/all-cars", {
               method: "GET",
               headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCars(data);
         } catch (error) {
            console.error("Error fetching cars:", error);
         }
      };

      fetchCars();
   }, []);

   return { cars };
};
