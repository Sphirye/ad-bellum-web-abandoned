<template>
	<v-footer color="red darken-4">
		<v-row justify="center" no-gutters class="my-2">

      <template v-for="(item, key) in buttons">
        <v-btn color="white" icon rounded :href="item.url" class="mx-3" target="_blank" :key="key">
          <v-icon size="30px">{{ item.icon }}</v-icon>
        </v-btn>
      </template>

		</v-row>

		<v-col class="py-4 text-center white--text d-flex justify-center align-center" cols="12">
			{{ new Date().getFullYear() }} <div class="mx-2">•</div> <AdBellumLogo/>
		</v-col>
	</v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AdBellumLogo from "@/components/AdBellumLogo.vue";

@Component({
  components: {AdBellumLogo}
})
export default class FooterComponent extends Vue {

  buttons = [
    { icon: "mdi-youtube", url: "https://www.youtube.com/@adbellumperu" },
    { icon: "mdi-facebook", url: "https://www.facebook.com/adbellumperu/" },
    { icon: "mdi-instagram", url: "https://www.instagram.com/adbellumperu/" },
    { icon: "mdi-twitter", url: "https://twitter.com/adbellum" },
  ]

}
</script>