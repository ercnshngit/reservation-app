import { Product } from "../product";

export type Reservation = {
  id: number;
  name: string;
  email: string;
  phone: string;
  startDateTime: string;
  endDateTime: string;
  durationInDays: number;
  status: string;
  barcode: string;
  productId: number;
  product: Product;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
