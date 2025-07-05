// Initial map setup (centered somewhere neutral)
var map = L.map('map').setView([0, 0], 2);
var marker;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function showLocation() {
    const lat = parseFloat(document.getElementById('latitude').value);
    const lng = parseFloat(document.getElementById('longitude').value);

    if (isNaN(lat) || isNaN(lng)) {
        alert("Please enter valid latitude and longitude values.");
        return;
    }

    // Move map and add marker
    map.setView([lat, lng], 15);

    if (marker) {
        map.removeLayer(marker);
    }

    marker = L.marker([lat, lng]).addTo(map)
        .bindPopup(`Latitude: ${lat}<br>Longitude: ${lng}`)
        .openPopup();
}