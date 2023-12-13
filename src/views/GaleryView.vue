<template>
  <v-container fluid class="px-12">

    <v-row dense align="center" justify="center" class="my-4">
      <h2 class="grey--text text--darken-2 font-weight-medium">Galería</h2>
    </v-row>

    <v-progress-linear color="grey" :indeterminate="loading"/>

    <v-row dense class="my-2">
      <template v-for="item in 12">
        <v-col cols="4" class="flex">
          <v-card outlined>
            <v-img :src="require(`@/assets/pictures/picture_${Math.floor(Math.random() * 3) + 1}.png`)" height="300px">
              <v-sheet color="transparent">
                <v-card-actions class="d-flex">
                  <v-spacer/>
                  <v-btn dark fab small depressed disabled>
                    <v-icon color="grey darken-3">{{ Math.random() < 0.5 ? "mdi-magnify" : "mdi-video" }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-sheet>
            </v-img>
          </v-card>
        </v-col>
      </template>
    </v-row>

    <v-row dense align="center" justify="end">
      <v-spacer/>
      <v-pagination class="white--text" color="red darken-3" v-model="page" :length="pageCount" :total-visible="8"/>
    </v-row>

  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Mixins} from 'vue-property-decorator';
import PaginationMixin from "@/mixins/PaginationMixin";

@Component({})
export default class GaleryView extends Mixins(PaginationMixin) {

  loading: boolean = false
  pageCount = 5
}
</script>