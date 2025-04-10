import { newCarAction } from "@/actions/car/new-car";

export default async function Home() {
   const carData = await newCarAction();

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1 className="text-4xl font-bold">Hello World</h1>
         {/* <button></button> */}
         <h1>{JSON.stringify(carData)}</h1>
         <p className="mt-4 text-lg">Welcome to my Next.js app!</p>
      </main>
   );
}
