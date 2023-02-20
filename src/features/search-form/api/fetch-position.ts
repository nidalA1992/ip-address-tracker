import { getApiKey } from "shared";

export const fetchPosition = async (ip: string) => {
  const api_key = getApiKey();

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw Error();
  }
};
