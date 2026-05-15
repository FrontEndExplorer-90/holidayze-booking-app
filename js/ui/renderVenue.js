import { getImage, getCity, formatPrice } from "../utils/helpers.js";

// ✨ Clean ugly API names
function cleanTitle(name) {
  return name.replace(/^z+\s*/i, "").trim();
}

export function renderVenue(container, venue) {
  if (!venue) {
    container.innerHTML = "<p>Venue not found</p>";
    return;
  }

  const title = cleanTitle(venue.name);
  const image = getImage(venue);
  const location = getCity(venue);
  const price = formatPrice(venue.price);
  const description =
    venue.description ||
    "An exclusive stay in a curated destination designed for comfort and atmosphere.";

  const today = new Date().toISOString().split("T")[0];

  container.innerHTML = `
    <!-- HERO -->
    <section class="venue-hero">
      <img src="${image}" alt="${title}" />

      <div class="venue-hero-overlay"></div>

      <div class="venue-hero-content">
        <h1>${title}</h1>
        <p>📍 ${location}</p>
      </div>
    </section>

    <!-- MAIN LAYOUT -->
    <section class="venue-layout">

      <!-- LEFT CONTENT -->
      <div class="venue-info">

        <div class="venue-card-block">
          <h2>About this venue</h2>
          <p>${description}</p>
        </div>

        <div class="venue-card-block">
          <h2>Experience</h2>
          <p>
            Designed for comfort and atmosphere, this venue blends location,
            design, and experience into one unforgettable stay.
          </p>
        </div>

      </div>

      <!-- BOOKING CARD -->
      <aside class="booking-card">

        <h3>${title}</h3>

        <div class="booking-price">
          ${price} <span>/ night</span>
        </div>

        <p class="booking-label">Select dates</p>

        <div class="booking-group">
          <label>Check-in</label>
          <input type="date" id="checkin" min="${today}">
        </div>

        <div class="booking-group">
          <label>Check-out</label>
          <input type="date" id="checkout" min="${today}">
        </div>

        <div class="booking-group">
          <label>Guests</label>

          <div class="guest-selector">
            <button id="decrease">−</button>
            <span id="guest-count">1</span>
            <button id="increase">+</button>
          </div>
        </div>

        <div class="booking-summary">
          <div>
            <span>Total</span>
            <strong id="total-price">${price}</strong>
          </div>
        </div>

        <button class="btn btn-primary booking-btn">
          Reserve Now
        </button>

        <p class="booking-note">
          No charges until confirmation
        </p>

      </aside>

    </section>
  `;
}
