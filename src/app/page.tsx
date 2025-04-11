"use client";

import { useCarsHook } from "@/hooks/useCars";

export default  function Home() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { cars } = useCarsHook();

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1 className="text-4xl font-bold">Hello World</h1>
         {/* <button></button> */}
         <h1>{JSON.stringify({})}</h1>
         <p className="mt-4 text-lg">Welcome to my Next.js app!</p>
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
         {cars.map((car) => (
            <div
               key={car.id}
               className="border rounded-lg shadow-md overflow-hidden bg-white w-[250px]"
            >
               <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover"
               />
               <div className="p-4">
                  <h2 className="text-xl font-semibold">
                     {car.brand} {car.model}
                  </h2>
                  <p className="text-gray-600">
                     {car.year} - {car.fuelType}
                  </p>
                  <p className="text-gray-800 mt-2">{car.description}</p>
                  <p className="text-gray-800 font-bold mt-2">
                     ${car.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 mt-1">
                     Mileage: {car.mileage.toLocaleString()} km
                  </p>
                  <p className="text-gray-600">Location: {car.location}</p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                     View Details
                  </button>
               </div>
            </div>
         ))}
         </div>
         {/* </div> */}
      </main>
   );
}
