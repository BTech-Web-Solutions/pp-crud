import React, { useState } from "react";

const index = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Eliane",
      whatsapp: "22981427626",
      sortNumbers: [1, 2, 3],
    },
    {
      id: 2,
      name: "Bernardo",
      whatsapp: "22981556221",
      sortNumbers: [4, 5, 6],
    },
    {
      id: 3,
      name: "Laura",
      whatsapp: "22981201771",
      sortNumbers: [7],
    },
  ]);
  return (
    <div className="flex flex-col justify-center px-8">
      <h1 className="text-2xl font-bold text-center mb-10">
        Clientes Cadastrados
      </h1>
      <ul className="flex flex-col gap-8">
        {customers.map((customer, index) => (
          <a href={`/registered/${customer.id}`}>
            <li key={index} className="border-2 border-zinc-500 rounded-md p-2">
              <h2>Nome: {customer.name}</h2>
              <p>WhatsApp: {customer.whatsapp}</p>
              <ul className="flex gap-2">
                <p>Números:</p>
                {customer.sortNumbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default index;
