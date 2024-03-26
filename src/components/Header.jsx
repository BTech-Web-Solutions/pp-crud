import { Menu } from "lucide-react";
import React, { useState } from "react";
import AsideMenu from "./AsideMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <AsideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="h-10 py-10 px-6 flex justify-between items-center border-b-2 border-zinc-500 mb-10">
        <h1
          className="text-lg"
          style={{
            fontFamily: "milky matcha personal use",
          }}
        >
          Primeira Parada
        </h1>
        <Menu className="h-10 w-10" onClick={() => setIsMenuOpen(true)} />
      </header>
    </>
  );
};

export default Header;
