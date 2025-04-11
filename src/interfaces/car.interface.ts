export interface Car {
    id?: string;
    model: string;
    brand: string;
    description: string;
    year: number;
    price: number;
    images: string[];
    fuelType: string;
    mileage: number;
    transmission: string;
    color: string;
    location: string;
    updatedAt?: Date;
    hp: number;
}
// createdAt: Date;