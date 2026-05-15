export function getImage(venue) {
  return venue.media?.[0]?.url || "/images/placeholder.jpg";
}

export function getCity(venue) {
  return venue.location?.city || "Unknown location";
}

export function formatPrice(price) {
  return `$${price} / night`;
}
