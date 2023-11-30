import { Navbar, NavbarBrand } from "@nextui-org/react";
import Image from "next/image";

export const Nabvar = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand className="flex flex-row">
        <Image
          alt="Icon app"
          width={70}
          height={70}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        ></Image>
        <p className="text-5xl">P</p>
        <p className="text-3xl">okémons</p>
      </NavbarBrand>
    </Navbar>
  );
};
