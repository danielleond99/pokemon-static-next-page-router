import { Layout } from "@/components/layouts/Layout";
import { GetStaticProps, NextPage } from "next";
import { pokeApi, ISmallPokemonsResponse, IPokemon } from "@/api";
import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/react";

interface IHomeProps {
  pokemons: IPokemon[];
}

const Home: NextPage<IHomeProps> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon app">
      <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} className="justify-center items-center">
            <Image
              alt={pokemon.name}
              className="object-cover"
              height={150}
              src={pokemon.img}
              width={200}
            />
            <CardFooter className="justify-between">
              <p className="text-lg text-white/80 capitalize">{pokemon.name}</p>
              <p className="text-lg text-white/80">#{pokemon.id}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: smallPokemons } = await pokeApi.get<ISmallPokemonsResponse>(
    "/pokemon?limit=1292"
  );
  const pokemons: IPokemon[] = smallPokemons.results.map(
    (smallPokemon, index) => ({
      ...smallPokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    })
  );
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
