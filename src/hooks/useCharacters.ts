import { useState, useEffect, useCallback } from "react";

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

  const fetchCharacters = useCallback(
    async (api: string, page: number) => {
      try {
        const { charaters, pagination, loading, error } = await requestAPI(
          api,
          page
        );
        setState({ charaters, pagination, loading, error });
      } catch (e: unknown) {
        const error = e as Error;
        setState({
          charaters: [],
          loading: false,
          error,
          pagination: state.pagination,
        });
      }
    },
    [] // TODO: remove this and split funcitonality in requestAPI and (handlePagination and useEffect)
  );

  const handlePagination = useCallback(
    async (pag: number) => {
      const newPag = state.pagination.current + pag;
      await fetchCharacters(api, newPag);
    },
    [fetchCharacters, state, api]
  );

  useEffect(() => {
    fetchCharacters(api, 1);
  }, [api, fetchCharacters]);

  return { state, handlePagination };
};
