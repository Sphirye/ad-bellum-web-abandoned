<template>
  <v-card outlined>

    <v-card-title class="pb-0 mb-0">
      <h3 class="font-weight-bold grey--text text--darken-3 custom-borderline">Eventos Recientes:</h3>
    </v-card-title>

    <v-card-text>
      <v-list three-line>

        <v-list-item three-line v-for="item in 3">
          <v-list-item-content>
            <v-list-item-subtitle>24/03/24</v-list-item-subtitle>
            <v-list-item-title>Torneo de la Manzana</v-list-item-title>
            <v-list-item-subtitle>Campo Marte - 28 de Julio</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-card-text>

  </v-card>
</template>
<script lang="ts">

import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class EventsComponent extends Vue {

}
</script>

<style scoped>

</style>