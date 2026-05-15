import { getVenues } from "./api/venues.js";
import { renderVenues } from "./ui/renderVenues.js";

const container = document.getElementById("featured-container");

async function init() {
  try {
    const venues = await getVenues();

    const filtered = venues
      .filter(v => v.media?.length > 0 && v.price > 0)
      .sort((a, b) => b.price - a.price)
      .slice(0, 6);

    renderVenues(container, filtered);

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Failed to load venues</p>";
  }
}

init();
