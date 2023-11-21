<template>
  <v-row align="center" justify="center">
    <v-tabs centered>
      <template v-for="(tab, key) in tabs">
        <v-tab link :to="tab.route" :key="key">{{ tab.name }}</v-tab>
      </template>
    </v-tabs>
  </v-row>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class SubheaderComponent extends Vue {

  tabs = [
    { name: "Inicio", route: "/home" },
    { name: "Combates", route: "/combats" },
    { name: "Eventos", route: "/events" },
    { name: "Galería", route: "/galery" },
    { name: "Acerca de", route: "/about" },
  ]

}
</script>