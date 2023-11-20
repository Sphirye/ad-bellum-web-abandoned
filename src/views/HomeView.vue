<template>
  <v-container>
		<v-row dense>

			<v-col cols="12">
        <CarouselComponent/>
			</v-col>

      <v-col cols="4">
        <EventsComponent/>
      </v-col>

      <v-col cols="8">
        <v-card outlined class="px-4">

          <v-card-title>
            <h3 class="font-weight-bold grey--text text--darken-3 custom-borderline">¿Que es Ad Bellum?</h3>
          </v-card-title>

          <v-card-text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum."
          </v-card-text>

          <v-card-text>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </v-card-text>

        </v-card>
      </v-col>

      <v-col cols="12">
        <v-sheet width="100%" color="grey lighten-2 pa-5">
          <v-card flat width="100%" height="100%">

            <v-card-text class="pb-0">
              <p class="ma-5 d-flex align-center">
                <v-divider/>
                <span class="mx-8 text-35 font-weight-light blackmoor-text custom-borderline">Contacto</span>
                <v-divider/>
              </p>
            </v-card-text>

            <v-card-text class="pt-0">
              <p class="text-center d-flex flex-column">
                <span><b>Email: </b>email@gmail.com</span>
                <span><b>Telefono: </b>+51 123 456 789</span>
                <span><b>Dirección: </b>Calle O'Donnell - No4 - Oficina no4 - C.P. 28.009 - Madrid (Spain)</span>
              </p>
            </v-card-text>

          </v-card>
        </v-sheet>
      </v-col>

		</v-row>
	</v-container>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator'
import {getModule} from "vuex-module-decorators"
import DialogModule from "@/store/DialogModule"
import LangModule from "@/store/LangModule"
import Rules from "@/service/tool/Rules"
import Dialog from "@/model/vue/Dialog"
import CarouselComponent from "@/components/CarouselComponent.vue";
import EventsComponent from "@/components/EventsComponent.vue";
import AdBellumLogo from "@/components/AdBellumLogo.vue";

@Component({
  components: {AdBellumLogo, EventsComponent, CarouselComponent}
})
export default class HomeView extends Vue {

	@Ref() readonly form!: HTMLFormElement

  get lang() { return getModule(LangModule).lang }
	get rules() { return Rules }

	validate() {
		getModule(DialogModule).showDialog(new Dialog(this.lang.warning, "¿Desea continuar?", () => {
			alert("Has continuado.")
		}))
	}

}
</script>
