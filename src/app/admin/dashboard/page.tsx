"use client";

import { useCarsHook } from "@/hooks/useCars";


export const dashboardPage = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { cars } = useCarsHook();

   return (
      <div>
         {cars.map((car) => (
            <div className="border-2 border-red-600" key={car.id}>
               <h1>{car.model}</h1>
               <p>{car.brand}</p>
               <p>{car.price}</p>
            </div>
         ))}
      </div>
   );
};
export default dashboardPage;
