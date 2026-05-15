import { getVenues } from "./api/venues.js";
import { renderVenues } from "./ui/renderVenues.js";

const container = document.getElementById("venues-container");

async function init() {
  try {
    const venues = await getVenues();

    console.log("VENUES:", venues); // debug

    renderVenues(container, venues);

  } catch (error) {
    console.error("Error:", error);

    if (container) {
      container.innerHTML = "<p>Failed to load venues</p>";
    }
  }
}

init();
