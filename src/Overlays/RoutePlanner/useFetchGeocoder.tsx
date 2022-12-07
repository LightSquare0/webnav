import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function useFetchGeocoder(
  args: string,
  isReverseGeocoding: boolean
) {
  const { data, error, isValidating } = useSWR(
    args.length > 0
      ? `https://api.mapbox.com/geocoding/v5/mapbox.places/${args}.json?types=place%2Cpostcode%2Caddress&limit=${
          isReverseGeocoding ? "1" : "10"
        }&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`
      : null,
    fetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isValidating };
}
