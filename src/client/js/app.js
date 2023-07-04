// Geonames API URL and key
export const geonamesUrl = "http://api.geonames.org/searchJSON";
export const geonamesKey = "taifalharbi";

// Weatherbit API URL and key
export const weatherbitUrl = "https://api.weatherbit.io/v2.0/current";
export const weatherbitKey = "1ab3d4a2a9974b498d7f23c05aec125e";

// Pixabay API URL and key
export const pixabayUrl = "https://pixabay.com/api/";
export const pixabayKey = "37143590-c10cce962c2f8e720a55a5663";

// Helper function to fetch data from an API
const fetchData = async (url, params) => {
  try {
    const apiUrl = `${url}?${new URLSearchParams(params)}`;
    console.log("Fetching data from:", apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export { fetchData };
