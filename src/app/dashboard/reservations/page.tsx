import React from "react";

export default async function Reservations() {
  const reservations = await fetch(
    "http://localhost:3000/api/reservations"
  ).then((res) => res.json());

  return (
    <div>
      {reservations.reservations.map((reservation) => (
        <div key={reservation.id}>
          <h1>{reservation.name}</h1>
          <p>{reservation.email}</p>
          <p>{reservation.phone}</p>
          <p>{reservation.startDateTime}</p>
          <p>{reservation.endDateTime}</p>
          <p>{reservation.durationInDays}</p>
          <p>{reservation.status}</p>
          <p>{reservation.barcode}</p>
          <p>{reservation.product.name}</p>
        </div>
      ))}
    </div>
  );
}
