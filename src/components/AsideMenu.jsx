import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const AsideMenu = ({ isOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  // Atualiza o estado quando a prop isOpen mudar
  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  // Função para fechar o menu
  const handleClose = () => {
    setMenuOpen(false);
    onClose();
  };

  return (
    <div className={`menu-container ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <div
        className="absolute top-0 w-full h-full z-40"
        onClick={handleClose}
      />
      <div className="absolute bg-white w-[70%] md:w-[40%] h-full z-50 p-5 flex flex-col items-start">
        <div className="flex justify-between w-full items-center">
          <h1
            className="text-lg"
            style={{
              fontFamily: "milky matcha personal use",
            }}
          >
            Primeira Parada
          </h1>
          <X className="text-zinc-800 h-7 w-7" onClick={handleClose} />
        </div>

        <div className="text-zinc-600 text-xl mt-16">
          <ul className="flex flex-col gap-3">
            <a href="/">
              <li className="hover:text-zinc-900">Início</li>
            </a>
            <a href="/registered">
              <li className="hover:text-zinc-900">Clientes Cadastrados</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
