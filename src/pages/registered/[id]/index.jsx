import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MoveLeft, SquarePen, Trash2 } from "lucide-react";

const Index = () => {
  const [customer, setCustomer] = useState({
    sortNumbers: [], // Initialize sortNumbers as an empty array
  });
  const [updateInput, setUpdateInput] = useState(false);
  const [newNumbers, setNewNumbers] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  const DEFAULT_WHATSAPP_MESSAGE =
    "Oláá!!! Seu numero foi sorteado para ganhar uma caixa de bombom aqui no Primeira Parada. PARABÉNNNSS!";

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const response = await fetch("/api/getUserById/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }), // Serializing id to JSON
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error("Error fetching customer:", error);
        setCustomer(null); // Setting customer to null if there's an error
      }
    };

    if (id) {
      getCustomer();
    }
  }, [id]); // Include id in the dependency array

  const handleAddNumber = async () => {
    try {
      const response = await fetch("/api/updateUser/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          data: { sortNumbers: [...customer.sortNumbers, newNumbers] },
        }), // Serializing id and data to JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCustomer(data);
    } catch (error) {
      console.error("Error adding number:", error);
    }
  };

  const removeCustomer = async () => {
    try {
      const response = await fetch("/api/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Serializing id to JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      router.push("/registered");
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-10 gap-5">
        <h1 className="text-3xl font-bold text-center">{customer?.name}</h1>
        <Trash2
          onClick={removeCustomer}
          className="h-8 w-8 relative z-50 hover:bg-zinc-500"
        />
      </div>
      <a
        className="flex gap-2 items-center"
        href={`https://wa.me/55${customer?.whatsapp}?text=${encodeURIComponent(
          DEFAULT_WHATSAPP_MESSAGE
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.svgrepo.com/show/473829/whatsapp.svg"
          alt="WhatsApp Logo"
          className="w-10 h-10"
        />
        <h2 className="text-lg font-semibold">{customer?.whatsapp}</h2>
      </a>
      <ul className="flex flex-col justify-center items-center mb-5">
        <p className="text-lg font-semibold mt-4">Números:</p>
        <div className="flex gap-3 flex-wrap px-10 text-center">
          {customer?.sortNumbers.map((number) => (
            <li key={number} className="text-xl">
              {number}
            </li>
          ))}
        </div>
      </ul>
      <div
        className="flex gap-2 p-2 bg-red-800 text-white rounded-lg mb-10 cursor-pointer"
        onClick={() => setUpdateInput(!updateInput)}
      >
        <SquarePen />
        <p>Adicionar Números</p>
      </div>

      {updateInput && (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Adicionar Número"
            className="text-center p-2 border-b-[1px] border-zinc-400 focus:outline-none"
            value={newNumbers}
            onChange={(e) => setNewNumbers(e.target.value)}
          />
          <button
            className="bg-red-800 p-3 rounded-full border-[2px] border-black text-zinc-200"
            onClick={handleAddNumber}
          >
            Salvar Número
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
