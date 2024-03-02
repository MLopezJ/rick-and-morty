import { useState, useEffect } from "react";

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
};

type CharactersRequest = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Character[];
};

type CharaterState = {
  charaters: Character[] | [];
  loading: boolean;
  error: Error | undefined;
};

export const useCharacters = (): CharaterState => {
  const api = `https://rickandmortyapi.com/api`;

  const [state, setState] = useState<CharaterState>({
    charaters: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const request = await fetch(`${api}/character`);
        const response: CharactersRequest = await request.json();
        const charaters = response.results;
        setState({ charaters, loading: false, error: undefined });
      } catch (e: unknown) {
        const error = e as Error;
        setState({ charaters: [], loading: false, error });
      }
    };

    fetchCharacters();
  }, [api]);

  return state;
};
