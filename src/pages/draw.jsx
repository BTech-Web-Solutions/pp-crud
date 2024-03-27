import React, { useState, useEffect } from "react";

const Draw = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-[100px] font-bold">{number}</h1>
      </div>

      <button className="bg-red-800 px-10 py-3 rounded-full border-[2px] border-black text-white text-xl font-bold tracking-wide">
        SORTEAR
      </button>
    </div>
  );
};

export default Draw;
