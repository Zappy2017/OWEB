// Mock API
const API_URL =
  "https://api.mockly.codes/destinations?page=1&limit=10&count=10";

export async function getPlaces() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return { data: [], pagination: null };
  }
}
