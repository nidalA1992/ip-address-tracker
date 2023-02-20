export const getUserApi = async () => {
  return await fetch('https://ipapi.co/json/').then(d => d.json());
}