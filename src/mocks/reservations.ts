import { Reservation } from "@/types/reservation";
import { PRODUCTS } from "./products";

export const RESERVATIONS: Reservation[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    startDateTime: "2021-10-01T10:00:00Z",
    endDateTime: "2021-10-02T10:00:00Z",
    durationInDays: 1,
    status: "active",
    barcode: "1234567890",
    productId: 1,
    product: PRODUCTS.find((product) => product.id === 1)!,
    createdAt: "2021-10-01T10:00:00Z",
    updatedAt: "2021-10-01T10:00:00Z",
    deletedAt: null,
  },
];
