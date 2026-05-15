import { getVenueById } from "./api/venue.js";
import { renderVenue } from "./ui/renderVenue.js";

const container = document.getElementById("venue-container");


function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function isDateBooked(date, bookings = []) {
  return bookings.some((booking) => {
    const start = new Date(booking.dateFrom);
    const end = new Date(booking.dateTo);
    return date >= start && date <= end;
  });
}

async function init() {
  const id = getIdFromUrl();

  if (!id) {
    container.innerHTML = "<p>No venue ID provided</p>";
    return;
  }

  try {
    const venue = await getVenueById(id);

    console.log("VENUE:", venue);

    renderVenue(container, venue);

    const checkin = document.getElementById("checkin");

    if (checkin) {
      checkin.addEventListener("change", (e) => {
        const selected = new Date(e.target.value);

        if (isDateBooked(selected, venue.bookings)) {
          alert("This date is already booked 😭");
          e.target.value = "";
        }
      });
    }

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Failed to load venue</p>";
  }
}

init();