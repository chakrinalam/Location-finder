let map = L.map('map').setView([20, 78], 4); // Default India center
let marker;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function showLocation() {
    const lat = parseFloat(document.getElementById('latitude').value);
    const lng = parseFloat(document.getElementById('longitude').value);

    if (isNaN(lat) || isNaN(lng)) {
        alert("⚠️ Please enter valid latitude and longitude!");
        return;
    }

    // Move and mark
    map.setView([lat, lng], 14);

    if (marker) {
        map.removeLayer(marker);
    }

    marker = L.marker([lat, lng]).addTo(map)
        .bindPopup(`📍 Location:<br>Lat: ${lat}<br>Lng: ${lng}`)
        .openPopup();
}