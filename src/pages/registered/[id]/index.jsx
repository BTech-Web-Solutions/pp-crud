import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [customer, setCustomer] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  const DEFAULT_WHATSAPP_MESSAGE =
    "Oláá!!! Seu numero foi sorteado para ganhar uma caixa de bombom aqui no Primeira Parada. PARABÉNNNSS!";

  useEffect(() => {
    setTimeout(() => {
      const getCustomer = async () => {
        const response = await fetch("http://localhost:3000/api/getUserById/", {
          method: "POST",
          body: {
            id: id,
          },
        });
        const data = await response.json();
        setCustomer(data);
      };
      getCustomer();
    }, 50);
  }, []);

  console.log(customer.sortNumbers);

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
        <div className="flex gap-3">
          {customer.sortNumbers?.map((number) => (
            <li key={number} className="text-xl">
              {number}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default index;
