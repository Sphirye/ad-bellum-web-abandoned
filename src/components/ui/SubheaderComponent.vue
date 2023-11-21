<template>
  <v-row align="center" justify="center">
    <v-tabs centered>
      <v-tab>Inicio</v-tab>
      <v-tab>Combates</v-tab>
      <v-tab>Eventos</v-tab>
      <v-tab>Galería</v-tab>
      <v-tab>Acerca de</v-tab>
    </v-tabs>
  </v-row>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class SubheaderComponent extends Vue {

}
</script>