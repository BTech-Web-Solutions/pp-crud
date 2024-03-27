import { Menu } from "lucide-react";
import React, { useState } from "react";
import AsideMenu from "./AsideMenu";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <AsideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="h-10 py-10 px-6 flex justify-between items-center border-b-2 border-zinc-500 mb-10">
        <h1
          className="text-lg cursor-pointer"
          style={{
            fontFamily: "milky matcha personal use",
          }}
          onClick={() => router.push("/")}
        >
          Primeira Parada
        </h1>
        <Menu className="h-10 w-10" onClick={() => setIsMenuOpen(true)} />
      </header>
    </>
  );
};

export default Header;
