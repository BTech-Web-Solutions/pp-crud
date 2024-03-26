import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [client, setClient] = useState({
    name: "",
    whatsapp: "",
    sortNumbers: [],
    currentSortNumber: "",
  });

  const handleAddSortNumber = () => {
    if (client.currentSortNumber.trim() === "") {
      return;
    }

    setClient({
      ...client,
      sortNumbers: [...client.sortNumbers, +client.currentSortNumber],
      currentSortNumber: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Cadastrar número</h1>

      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-1 text-xl font-semibold">Nome</h3>
        <input
          type="text"
          placeholder="Nome do Cliente"
          className="text-center p-2 border-b-[1px] border-zinc-400 focus:outline-none"
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h3 className="mb-1 text-xl font-semibold">WhatsApp</h3>
        <input
          type="text"
          placeholder="Número do WhatsApp"
          className="text-center p-2 border-b-[1px] border-zinc-400 focus:outline-none"
          onChange={(e) => setClient({ ...client, whatsapp: e.target.value })}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-1 text-xl font-semibold">Números do Sorteio</h3>
        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Números"
            value={client.currentSortNumber}
            className="text-center p-2 border-b-[1px] border-zinc-400 focus:outline-none appearance-none"
            onChange={(e) =>
              setClient({ ...client, currentSortNumber: e.target.value })
            }
            inputMode="numeric"
          />
          <button
            className="text-3xl border-[2px] border-zinc-600 rounded-sm bg-zinc-400"
            onClick={handleAddSortNumber}
          >
            <Plus className="w-8 h-8" />
          </button>
        </div>
        <div className="mt-2">
          {/* Mostra os números separados por vírgula */}
          <span className="font-semibold">{client.sortNumbers.join(", ")}</span>
        </div>
      </div>

      <button
        className="bg-red-800 p-3 rounded-full border-[2px] border-black text-zinc-200"
        onClick={(e) => {
          console.log(client);
          e.target.classList.add("bg-red-900");

          setTimeout(() => {
            e.target.classList.remove("bg-red-900");
          }, 50);
        }}
      >
        Salvar Número
      </button>
    </div>
  );
}
