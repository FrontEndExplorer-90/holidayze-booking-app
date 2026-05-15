import { API_BASE } from "./config.js";

export async function getVenueById(id) {
  try {
    const response = await fetch(
      `${API_BASE}/holidaze/venues/${id}?_owner=true&_bookings=true`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch venue");
    }

    const json = await response.json();
    return json.data;

  } catch (error) {
    console.error(error);
    return null;
  }
}
