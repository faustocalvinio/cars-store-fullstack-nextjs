import { Car } from "@/interfaces/car.interface";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const cars: Car[] = [
   {
      model: "Model S",
      brand: "Tesla",
      description: "A premium electric sedan with exceptional performance.",
      year: 2022,
      price: 79999,
      images: [
         "/cars/car-1.jpg",
         "/cars/car-2.jpg",
         "/cars/car-3.jpg",
         "cars/car-4.jpg",
         "cars/car-5.jpg",
      ],
      fuelType: "Electric",
      mileage: 0,
      transmission: "Automatic",
      color: "Red",
      location: "California, USA",
      hp: 670,
   },
   {
      model: "Civic",
      brand: "Honda",
      description: "A reliable and fuel-efficient compact car.",
      year: 2021,
      price: 24999,
      images: [
         "/cars/car-1.jpg",
         "/cars/car-2.jpg",
         "/cars/car-3.jpg",
         "cars/car-4.jpg",
         "cars/car-5.jpg",
      ],
      fuelType: "Gasoline",
      mileage: 15000,
      transmission: "Manual",
      color: "Blue",
      location: "Texas, USA",
      hp: 158,
   },
   {
      model: "Mustang",
      brand: "Ford",
      description: "A classic American muscle car with powerful performance.",
      year: 2020,
      price: 55999,
      images: [
         "/cars/car-1.jpg",
         "/cars/car-2.jpg",
         "/cars/car-3.jpg",
         "cars/car-4.jpg",
         "cars/car-5.jpg",
      ],
      fuelType: "Gasoline",
      mileage: 12000,
      transmission: "Automatic",
      color: "Black",
      location: "Florida, USA",
      hp: 450,
   },
   {
      model: "Camry",
      brand: "Toyota",
      description: "A dependable midsize sedan with great fuel economy.",
      year: 2023,
      price: 27999,
      images: [
         "/cars/car-1.jpg",
         "/cars/car-2.jpg",
         "/cars/car-3.jpg",
         "cars/car-4.jpg",
         "cars/car-5.jpg",
      ],
      fuelType: "Hybrid",
      mileage: 0,
      transmission: "Automatic",
      color: "White",
      location: "New York, USA",
      hp: 208,
   },
   {
      model: "Wrangler",
      brand: "Jeep",
      description: "A rugged SUV built for off-road adventures.",
      year: 2022,
      price: 39999,
      images: [
         "/cars/car-1.jpg",
         "/cars/car-2.jpg",
         "/cars/car-3.jpg",
         "cars/car-4.jpg",
         "cars/car-5.jpg",
      ],
      fuelType: "Gasoline",
      mileage: 5000,
      transmission: "Manual",
      color: "Green",
      location: "Colorado, USA",
      hp: 285,
   },
   {
      model: "3 Series",
      brand: "BMW",
      description: "A luxury sedan with sporty handling and advanced features.",
      year: 2021,
      price: 41999,
      images: [
         "/cars/car-1.jpg",
         "/cars/car-2.jpg",
         "/cars/car-3.jpg",
         "cars/car-4.jpg",
         "cars/car-5.jpg",
      ],
      fuelType: "Gasoline",
      mileage: 10000,
      transmission: "Automatic",
      color: "Silver",
      location: "Illinois, USA",
      hp: 255,
   },
];

export async function GET() {
   // Simulate seeding data to a database
   console.log("Seeding cars data...");
   const seededCars = await prisma.car.createMany({
      data: cars,
   });
   console.log("Seeded cars data:", seededCars);

   return NextResponse.json({ message: "Cars data seeded successfully", cars });
}
