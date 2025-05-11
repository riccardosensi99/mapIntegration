<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <MapComponent @multa="aggiungiMultato" />
      </div>
      <div class="col-md-4">
        <MarkerTable :multati="multati" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MapComponent from '../components/MapComponent.vue';
import MarkerTable from '../components/MarkerTable.vue';

interface MarkerData {
  plate: string;
  latitude: number;
  longitude: number;
}

const multati = ref<MarkerData[]>([]);

function aggiungiMultato(data: MarkerData) {
  if (!multati.value.some(m => m.plate === data.plate)) {
    multati.value.push(data);
  }
}
</script>
