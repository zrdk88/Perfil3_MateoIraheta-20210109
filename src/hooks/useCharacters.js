import useFetchData from './useFetchData';

const URL = 'https://rickandmortyapi.com/api/character';

// Hook específico: transforma la respuesta al formato que necesita la UI.
export default function useCharacters() {
  const { data, loading, error, reload } = useFetchData(URL);

  const characters = (data?.results ?? []).map((c) => ({
    id: c.id,
    name: c.name,
    image: c.image,
    description: `${c.species} · ${c.status} · ${c.gender}. Origen: ${c.origin?.name}. Ubicación: ${c.location?.name}.`,
  }));

  return { characters, loading, error, reload };
}
