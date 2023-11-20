<template>
	<v-app-bar color="grey darken-4" dark app clipped-left flat>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

		<div class="custom-borderline pointer ml-2">
      <AdBellumLogo @click="$router.push('/').catch(err => {})"/>
    </div>

		<v-spacer/>

		<v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
			<span class="mr-2">Latest Release</span>
			<v-icon>mdi-open-in-new</v-icon>
		</v-btn>

	</v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {getModule} from "vuex-module-decorators"
import LangModule from "@/store/LangModule"
import DrawerModule from "@/store/DrawerModule";
import AdBellumLogo from "@/components/AdBellumLogo.vue";

@Component({
  components: {AdBellumLogo}
})
export default class HeaderComponent extends Vue {
	lang = getModule(LangModule).lang
  drawerModule:DrawerModule = getModule(DrawerModule)

  get drawer() { return this.drawerModule.drawer }
  set drawer(value: boolean) { this.drawerModule.setDrawer(value) }
}
</script>
