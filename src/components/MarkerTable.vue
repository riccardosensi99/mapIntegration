<template>
  <div>
    <h4 class="text-center mt-3">Veicoli Multati</h4>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Targa</th>
          <th>Lat</th>
          <th>Lng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(m, i) in multati" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ m.plate }}</td>
          <td>{{ m.latitude }}</td>
          <td>{{ m.longitude }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  multati: {
    plate: string;
    latitude: number;
    longitude: number;
  }[];
}>();
</script>
