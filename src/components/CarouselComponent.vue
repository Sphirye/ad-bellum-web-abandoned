<template>
  <v-carousel :height="height">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/pictures/${item}.png`)"/>
  </v-carousel>
</template>

<script lang="ts">

import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class CarouselComponent extends Vue {

  @Prop({ default: "300px" }) readonly height!: string

  items: string[] = [
      "picture_1",
      "picture_2",
      "picture_3"
  ]

}
</script>