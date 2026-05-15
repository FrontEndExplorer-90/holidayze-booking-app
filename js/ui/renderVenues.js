import { getImage, getCity, formatPrice } from "../utils/helpers.js";

//Clean API names
function cleanTitle(name) {
    return name.replace(/^z+/i, "").trim();
}

//Filter out venues
function isValidVenue(venue) {
    return (
        venue.name &&
        !venue.name.toLowerCase().startsWith("zzz") && // remove certain names
        venue.media?.length > 0 && // must have image
        venue.price > 0 // no free venues
    );
}

export function renderVenues(container, venues) {
    container.innerHTML = "";

    //Filter + limit results
    const filteredVenues = venues
        .filter(v => v.media?.length > 0 && v.price > 0)
        .sort((a, b) => b.price - a.price)
        .slice(0, 8);

    if (!filteredVenues.length) {
        container.innerHTML = "<p>No premium venues available</p>";
        return;
    }

    filteredVenues.forEach((venue) => {
        const card = document.createElement("div");
        card.classList.add("venue-card");

        const image = getImage(venue);
        const title = cleanTitle(venue.name);
        const location = getCity(venue);
        const price = formatPrice(venue.price);

        card.innerHTML = `
  <a href="venue.html?id=${venue.id}" class="venue-link">

    <div class="venue-image">
      <img src="${image}" alt="${title}">
    </div>

    <div class="venue-content">
      <h3>${title}</h3>
      <p class="venue-location">${location}</p>
      <p class="venue-price">${price}</p>
    </div>

  </a>
`;

        container.appendChild(card);
    });
}
