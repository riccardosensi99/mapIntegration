<template>
  <div>
    <h4 class="text-center mt-3">Mappa</h4>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const emit = defineEmits<{
  (e: 'multa', data: { plate: string; latitude: number; longitude: number }): void;
}>();

const veicoli = [
  { plate: 'AB123CD', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'EF456GH', latitude: 45.4642, longitude: 9.1900 },
  { plate: 'IJ789KL', latitude: 40.8518, longitude: 14.2681 },
  { plate: 'MN012OP', latitude: 43.7696, longitude: 11.2558 },
  { plate: 'QR345ST', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'UV678WX', latitude: 45.0703, longitude: 7.6869 },
  { plate: 'YZ123AB', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'CD456EF', latitude: 45.4408, longitude: 12.3155 },
  { plate: 'GH789IJ', latitude: 40.8518, longitude: 14.2681 },
  { plate: 'KL012MN', latitude: 43.7696, longitude: 11.2558 },
  { plate: 'OP345QR', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'ST678UV', latitude: 45.0703, longitude: 7.6869 },
  { plate: 'WX901YZ', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'AB234CD', latitude: 45.4408, longitude: 12.3155 },
  { plate: 'EF567GH', latitude: 40.8518, longitude: 14.2681 },
  { plate: 'IJ890KL', latitude: 43.7696, longitude: 11.2558 },
  { plate: 'MN123OP', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'CD456EF', latitude: 45.4408, longitude: 12.3155 },
  { plate: 'GH789IJ', latitude: 40.8518, longitude: 14.2681 },
  { plate: 'KL012MN', latitude: 43.7696, longitude: 11.2558 },
  { plate: 'OP345QR', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'ST678UV', latitude: 45.0703, longitude: 7.6869 },
  { plate: 'WX901YZ', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'AB234CD', latitude: 45.4408, longitude: 12.3155 },
  { plate: 'EF567GH', latitude: 40.8518, longitude: 14.2681 },
  { plate: 'IJ890KL', latitude: 43.7696, longitude: 11.2558 },
  { plate: 'MN123OP', latitude: 41.9028, longitude: 12.4964 },
  { plate: 'QR456ST', latitude: 45.0703, longitude: 7.6869 },
  { plate: 'II789KL', latitude: 43.0624, longitude: 12.6268 }
];

const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

onMounted(() => {
  const map = L.map('map').setView([42.5, 13.5], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  veicoli.forEach(vehicle => {
    const marker = L.marker([vehicle.latitude, vehicle.longitude]).addTo(map);

    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
      <strong>Targa:</strong> ${vehicle.plate}<br>
      <strong>Lat:</strong> ${vehicle.latitude}<br>
      <strong>Lng:</strong> ${vehicle.longitude}<br>
    `;

    const btn = document.createElement('button');
    btn.textContent = 'Multa';
    btn.className = 'btn btn-danger btn-sm mt-2';
    btn.onclick = () => {
      emit('multa', vehicle);
      marker.setIcon(redIcon);
      marker.closePopup();
    };

    popupContent.appendChild(btn);
    marker.bindPopup(popupContent);
  });
});
</script>

<style scoped>
.map-container {
  height: 70vh;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
