<template>
  <div class="home">
    <h1>{{ phoneData.groupName }}</h1>
    <gold-stars :rating="rating"></gold-stars>
    <p>{{ displayDescription }}</p>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { Component, Prop, Vue } from 'vue-property-decorator';
import GoldStars from '@/components/General/GoldStars.vue';

@Component({
  components: {
  GoldStars,
  }
  })
export default class ProductDescription extends Vue {
  @Prop() phoneData!: any

  get rating() {
    return Math.ceil(this.phoneData.rating);
  }

  get displayDescription() {
    return this.phoneData.deviceSummary[0].displayDescription;
  }

}
</script>
