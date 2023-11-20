<template>
  <v-carousel height="300px">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/pictures/${item}.png`)"/>
  </v-carousel>
</template>

<script lang="ts">

import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class CarouselComponent extends Vue {

  items: string[] = [
      "picture_1",
      "picture_2",
      "picture_3"
  ]

}
</script>