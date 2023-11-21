<template>
	<v-app-bar color="grey darken-4" dark app clipped-left flat extended>

		<div class="custom-borderline pointer ml-2">
      <AdBellumLogo @click="$router.push('/').catch(err => {})"/>
    </div>

		<v-spacer/>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

    <template v-slot:extension>
      <SubheaderComponent/>
    </template>

	</v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {getModule} from "vuex-module-decorators"
import LangModule from "@/store/LangModule"
import DrawerModule from "@/store/DrawerModule";
import AdBellumLogo from "@/components/AdBellumLogo.vue";
import SubheaderComponent from "@/components/ui/SubheaderComponent.vue";

@Component({
  components: {SubheaderComponent, AdBellumLogo}
})
export default class HeaderComponent extends Vue {
	lang = getModule(LangModule).lang
  drawerModule:DrawerModule = getModule(DrawerModule)

  get drawer() { return this.drawerModule.drawer }
  set drawer(value: boolean) { this.drawerModule.setDrawer(value) }
}
</script>
