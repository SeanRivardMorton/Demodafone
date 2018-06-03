<template>
  <div class="home">
    <h1>{{ productDetails.productGroupName }}</h1>
    <gold-stars :rating="rating"></gold-stars>
    <p>{{ productDetails.productDescription }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GoldStars from '@/components/General/GoldStars.vue';

interface productDetails {
  productRating: number,
  productDescription: string,
  productGroupName: string
}

@Component({
  components: {
  GoldStars,
  }
  })
export default class ProductDescription extends Vue {
  @Prop() productDetails!: productDetails

  get rating() {
    return Math.ceil(this.productDetails.productRating);
  }

}
</script>
