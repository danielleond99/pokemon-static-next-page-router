import axios from "axios";

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export interface IPokemon extends ISmallPokemon {
  id: number;
  img: string;
}

export interface ISmallPokemonsResponse {
  count: number;
  results: ISmallPokemon[];
}

export interface ISmallPokemon {
  name: string;
  url: string;
}
