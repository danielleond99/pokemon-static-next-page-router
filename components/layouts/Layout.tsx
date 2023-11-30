import { FC, ReactElement } from "react";
import Head from "next/head";
import { Nabvar } from "../ui";

interface ILayoutProps {
  title?: string;
  children: ReactElement;
}

export const Layout: FC<ILayoutProps> = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Daniel León" />
        <meta name="description" content="Informació sobre los pokemones" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>
      <Nabvar />
      <main className="mx-5 my-2">{children}</main>
    </>
  );
};
