import React, { useState, useEffect } from "react";

const Draw = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [secondNumbers, setSecondNumbers] = useState([0, 0, 0]);
  const [thirdNumbers, setThirdNumbers] = useState([0, 0, 0]);
  const [fourthNumbers, setFourthNumbers] = useState([0, 0, 0]);
  const [rolling, setRolling] = useState(false);
  const [finalNumbers, setFinalNumbers] = useState([0, 0, 0]);

  const sortearNumeros = () => {
    if (rolling) return;

    setRolling(true);

    // Números aleatórios a serem exibidos durante a animação
    const newNumbers = [
      Math.floor(Math.random() * 2), // Garantir que seja 0 ou 1
      Math.floor(Math.random() * 10), // Deixando de 0 a 9
      Math.floor(Math.random() * 10), // Deixando de 0 a 9
    ];
    setNumbers(newNumbers);

    setTimeout(() => {
      const secondNumbers = [
        Math.floor(Math.random() * 2), // Garantir que seja 0 ou 1
        Math.floor(Math.random() * 10), // Deixando de 0 a 9
        Math.floor(Math.random() * 10), // Deixando de 0 a 9
      ];
      setSecondNumbers(secondNumbers);
    }, 50); // 50 milissegundos de espera para a animação

    setTimeout(() => {
      const thirdNumbers = [
        Math.floor(Math.random() * 2), // Garantir que seja 0 ou 1
        Math.floor(Math.random() * 10), // Deixando de 0 a 9
        Math.floor(Math.random() * 10), // Deixando de 0 a 9
      ];
      setThirdNumbers(thirdNumbers);
    }, 55); // 55 milissegundos de espera para a animação

    // Número final após 5 segundos
    setTimeout(() => {
      const finalNumbers = [
        Math.floor(Math.random() * 2), // Garantir que seja 0 ou 1
        Math.floor(Math.random() * 10), // Deixando de 0 a 9
        Math.floor(Math.random() * 10), // Deixando de 0 a 9
      ];
      setFinalNumbers(finalNumbers);
      setRolling(false);
    }, 60); // 60 milissegundos de espera para a animação
  };

  useEffect(() => {
    if (!rolling) {
      setNumbers(finalNumbers);
    }
  }, [rolling, finalNumbers]);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex items-center justify-center gap-5">
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`border-2 border-black px-5 flex justify-center items-center dsp-number ${
              rolling ? "rolling" : ""
            }`}
          >
            <h1 className="text-[100px] font-bold">{number}</h1>
          </div>
        ))}
      </div>

      <button
        onClick={sortearNumeros}
        className="bg-red-800 px-10 py-3 rounded-full border-[2px] border-black text-white text-xl font-bold tracking-wide"
      >
        SORTEAR
      </button>
    </div>
  );
};

export default Draw;
