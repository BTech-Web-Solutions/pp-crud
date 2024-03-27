import { MoveLeft } from "lucide-react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Draw = () => {
  const [number, setNumber] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [allNumbers, setAllNumbers] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false); // Estado para controlar se o sorteio está em andamento
  const [currentIndex, setCurrentIndex] = useState(0); // Índice do número atual

  const router = useRouter();

  const getUsers = async () => {
    const response = await fetch("/api/getUsers");
    const data = await response.json();
    setCustomers(data);
  };

  const getNumbers = () => {
    const numbers = customers.flatMap((customer) => customer.sortNumbers);
    setAllNumbers(numbers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const drawNumber = () => {
    setIsDrawing(true); // Inicia o sorteio
    setCurrentIndex(0); // Reinicia o índice do número atual
  };

  useEffect(() => {
    if (customers.length > 0) {
      getNumbers();
    }
  }, [customers]);

  useEffect(() => {
    let intervalId;
    if (isDrawing) {
      intervalId = setInterval(() => {
        setNumber(allNumbers[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);

        // Quando todos os números forem exibidos, seleciona aleatoriamente um número final
        if (currentIndex === allNumbers.length - 1) {
          clearInterval(intervalId);
          const randomNumber = Math.floor(Math.random() * allNumbers.length);
          setNumber(allNumbers[randomNumber]);
          setIsDrawing(false); // Finaliza o sorteio
        }
      }, 100); // Intervalo de 0.1 segundos
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isDrawing, allNumbers, currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div
        className="flex justify-start items-start w-full px-5 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <MoveLeft className="h-8 w-8 text-red-700" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-[100px] font-bold">{number}</h1>
      </div>

      <button
        className="bg-red-800 px-10 py-3 rounded-full border-[2px] border-black text-white text-xl font-bold tracking-wide"
        onClick={drawNumber}
        disabled={isDrawing} // Desabilita o botão enquanto o sorteio estiver em andamento
      >
        SORTEAR
      </button>
    </div>
  );
};

export default Draw;
