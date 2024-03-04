import { useState, useEffect, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";

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

type characterState = {
  character: Character | undefined;
  loading: boolean;
  error: Error | undefined;
};

const requestAPI = async (api: string, id: string) => {
  const request = await fetch(`${api}/character/${id}`);
  const character: Character = await request.json();

  return {
    character,
    loading: false,
    error: undefined,
  };
};

export const useCharacter = () => {
  const api = `https://rickandmortyapi.com/api`;
  const { id } = useParams();
  const [state, setState] = useState<characterState>({
    character: undefined,
    loading: true,
    error: undefined,
  });

  const fetchCharacter = async (api: string, id: string) => {
    try {
      const { character, loading, error } = await requestAPI(api, id);
      setState({ character, loading, error });
    } catch (e: unknown) {
      const error = e as Error;
      setState({
        character: undefined,
        loading: false,
        error,
      });
    }
  };

  useEffect(() => {
    fetchCharacter(api, id !== undefined ? id : "");
  }, [api]);

  return state;
};
