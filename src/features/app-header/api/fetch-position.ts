import { getApiKey } from "shared";

export const fetchPosition = async () => {
  const api_key = getApiKey();

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=8.8.8.8`
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw Error();
  }
};
