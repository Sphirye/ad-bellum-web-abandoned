<template>
  <v-container fluid class="px-12">

    <v-row dense align="center">
      <v-col cols="12">
        <div class="d-flex align-center">
          <h2 class="grey--text text--darken-2 font-weight-medium my-4">Eventos</h2>
          <v-spacer/>
          <div style="width: 350px">
            <v-text-field outlined hide-details="auto" rounded dense :label="lang.search" append-icon="mdi-magnify"/>
          </div>
        </div>
        <v-spacer/>
        <v-progress-linear color="grey" :indeterminate="loading"/>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12" sm="6" md="4" class="flex" v-for="item in 15">
        <v-hover v-slot="{ hover }">
          <v-card flat outlined class="grey lighten-3" rounded="0">
            <v-img height="300px" width="100%" class="d-flex align-end" src="@/assets/pictures/picture_3.png">
              <v-sheet>
                <v-card-text class="d-flex">
                  <div>
                    <p class="work-sans font-weight-medium line-clamp-1 grey--text text--darken-3 text-20 pb-0 mx-auto mb-0">Nombre del evento</p>
                    <v-fade-transition>
                      <v-expand-transition>
                        <div v-if="hover">
                          <p class="work-sans grey--text mx-auto text-15 my-0">Descripción del evento</p>
                          <p class="work-sans grey--text mx-auto my-0 text-20">09/11/2001</p>
                        </div>
                      </v-expand-transition>
                    </v-fade-transition>
                  </div>

                  <v-spacer/>

                  <div>

                    <v-btn icon>
                      <v-icon>mdi-information</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </div>

                </v-card-text>
              </v-sheet>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
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
import {getModule} from "vuex-module-decorators";
import LangModule from "@/store/LangModule";

@Component
export default class EventsView extends Mixins(PaginationMixin) {

  get lang() { return getModule(LangModule).lang }

  loading: boolean = false
  pageCount = 5

}
</script>