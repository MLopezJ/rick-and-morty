import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

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
  pagination: Pagination;
};

export type Pagination = {
  current: number;
  total: number;
  next: string | undefined;
  prev: string | undefined;
};

const requestAPI = async (api: string, page: number) => {
  console.log(page)
  const request = await fetch(`${api}/character?page=${page}`);
  const response: CharactersRequest = await request.json();
  const pagination = {
    current: page,
    next: response.info.next,
    prev: undefined,
    total: response.info.pages,
  };
  const charaters = response.results;

  return {
    charaters,
    loading: false,
    error: undefined,
    pagination,
  };
};

export const useCharacters = (): {
  state: CharaterState;
  handlePagination: (pag: number) => Promise<void>;
} => {
  const api = `https://rickandmortyapi.com/api`;
  const location = useLocation().state;
  const [state, setState] = useState<CharaterState>({
    charaters: [],
    loading: true,
    error: undefined,
    pagination: {
      current: 1,
      total: 1,
      next: undefined,
      prev: undefined,
    },
  });

  const fetchCharacters = async (api: string, page: number) => {
    try {
      const { charaters, pagination, loading, error } = await requestAPI(
        api,
        page
      );
      setState({ charaters, pagination, loading, error });
      console.log(state, pagination)
    } catch (e: unknown) {
      const error = e as Error;
      setState({
        charaters: [],
        loading: false,
        error,
        pagination: state.pagination,
      });
    }
  };

  const handlePagination = useCallback(
    async (pag: number) => {
      const newPag = state.pagination.current + pag;
      await fetchCharacters(api, newPag);
    },
    [fetchCharacters, state, state.pagination, api]
  );

  useEffect(() => {
    const pag = location?.pag
    fetchCharacters(api, pag !== undefined && pag !== 0? pag : state.pagination.current);
  }, [api]);

  return { state, handlePagination }; 
};
