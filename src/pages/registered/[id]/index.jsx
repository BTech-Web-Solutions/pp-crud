import React, { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [customer, setCustomer] = useState({
    id: 1,
    name: "Bernardo",
    whatsapp: "22981556221",
    sortNumbers: [1, 2, 3],
  });

  const router = useRouter();
  const { id } = router.query;
  const DEFAULT_WHATSAPP_MESSAGE =
    "Oláá!!! Seu numero foi sorteado para ganhar uma caixa de bombom aqui no Primeira Parada. PARABÉNNNSS!";

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-10">{customer.name}</h1>
      <a
        className="flex gap-2 items-center"
        href={`https://wa.me/55${customer.whatsapp}?text=${encodeURIComponent(
          DEFAULT_WHATSAPP_MESSAGE
        )}`}
        target="_blank"
      >
        <img
          src="https://www.svgrepo.com/show/473829/whatsapp.svg"
          className="w-10 h-10"
        />
        <h2 className="text-lg font-semibold">{customer.whatsapp}</h2>
      </a>
      <ul className="flex flex-col justify-center items-center">
        <p className="text-lg font-semibold mt-4">Números:</p>
        <div className="flex gap-2">
          {customer.sortNumbers.map((number, index) => (
            <li key={index} className="text-lg">
              {number}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default index;
