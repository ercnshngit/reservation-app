import { RESERVATIONS } from "@/mocks/reservations";

export async function GET() {
  return new Response(
    JSON.stringify({
      reservations: RESERVATIONS,
      currentPage: 1,
      totalPages: 1,
      totalItems: 1,
      itemsPerPage: 10,
    }),
    {
      status: 200,
    }
  );
}
