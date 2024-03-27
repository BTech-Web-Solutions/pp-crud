import React, { useEffect, useState } from "react";

const index = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch("http://localhost:3000/api/getUsers");
      const data = await response.json();
      setCustomers(data);
    };
    getCustomers();
  }, []);
  console.log(customers);

  return (
    <div className="flex flex-col justify-center px-8">
      <h1 className="text-2xl font-bold text-center mb-10">
        Clientes Cadastrados
      </h1>
      <ul className="flex flex-col gap-8">
        {customers.map((customer, index) => (
          <a href={`/registered/${customer._id}`} key={index}>
            <li className="border-2 border-zinc-500 rounded-md p-2">
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
