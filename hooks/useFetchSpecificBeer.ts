import { useQuery } from "react-query";

async function fetchData() {
  const res = await fetch(`https://api.punkapi.com/v2/beers/random`);
  const json = await res.json();
  return json;
}

export default function useRandomBeer() {
  return useQuery("beers", fetchData);
}
