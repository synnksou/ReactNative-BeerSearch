import { useQuery } from "react-query";

async function fetchData() {
  const res = await fetch(`https://api.punkapi.com/v2/beers`);
  const json = await res.json();
  return json;
}

export default function useFetchBeers() {
  return useQuery(["beers"], fetchData);
}
