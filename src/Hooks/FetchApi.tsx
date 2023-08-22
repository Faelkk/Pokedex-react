import { useState, useEffect } from "react";
import { typePokedex, Pokemon, PokeFilter } from "../Types/Type";

const fetchApi = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Erro na requisição à API");
    }
  } catch (error: any) {
    throw new Error("Erro ao buscar informações: " + error.message);
  }
};

export const useApi = (limit: number) => {
  const [pokedex, setPokedex] = useState<typePokedex[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    setError(false);

    try {
      const result = await fetchApi(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      setPokedex(result.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [limit]);

  return { pokedex, loading, error, fetchPokemons };
};

export const usePokemon = (pokeURL: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(false);

    try {
      const result = await fetchApi(pokeURL);
      setPokemon(result);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokeURL]);

  return { pokemon, loading, error };
};

export const useApiType = (typeName: string) => {
  const url_type = `https://pokeapi.co/api/v2/type/${typeName}`;

  const [PokedexFilter, setPokedexFilter] = useState<PokeFilter | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokemonsFilter = async () => {
    setLoading(true);
    setError(false);

    try {
      const result = await fetchApi(url_type);
      setPokedexFilter(result);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonsFilter();
  }, []);

  return { PokedexFilter, loading, error };
};

export const use_pokeByInfo = () => {
  const [pokeInfo, setPokeInfo] = useState<Pokemon | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokeInfo = async (infoPoke: any) => {
    setLoading(true);
    setError(false);
    try {
      const result = await fetchApi(
        `https://pokeapi.co/api/v2/pokemon/${infoPoke}`
      );
      setPokeInfo(result);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { pokeInfo, loading, error, setError, fetchPokeInfo };
};

export const use_pokePreview = () => {
  const [pokemonPreview, setPokemonPreview] = useState<Pokemon | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPokeInfo = async (infoPoke: number) => {
    setLoading(true);
    setError(false);
    try {
      const result = await fetchApi(
        `https://pokeapi.co/api/v2/pokemon/${infoPoke}`
      );
      setPokemonPreview(result);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { pokemonPreview, loading, error, fetchPokeInfo };
};
