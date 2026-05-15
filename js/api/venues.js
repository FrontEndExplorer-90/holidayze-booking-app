import { API_BASE } from "./config.js";

export async function getVenues() {
  try {
    const response = await fetch(`${API_BASE}/holidaze/venues`);

    if (!response.ok) {
      throw new Error("Failed to fetch venues");
    }

    const json = await response.json();

    return json.data; // 👈 VERY IMPORTANT

  } catch (error) {
    console.error("Error fetching venues:", error);
    return [];
  }
}

