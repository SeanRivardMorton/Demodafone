<template>
  <div class="home">
    <h1>Apple iPhone 8</h1>
    <gold-stars></gold-stars>
    <p>All-Glass design, advanced cameras, wireless charging and a smart A11 Bionic chip.</p>
    <p>Intelligence never looked so good.</p>
    <product-color-picker></product-color-picker>
    <product-price-summary></product-price-summary>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { Component, Vue } from 'vue-property-decorator';
import GoldStars from '@/components/General/GoldStars.vue';
import ProductOptionsPicker from '@/components/ProductPicker/ProductOptionsPicker.vue';
import ProductPriceSummary from '@/components/ProductPicker/ProductPriceSummary.vue';

@Component({
  components: {
  GoldStars,
  ProductOptionsPicker,
  ProductPriceSummary
  }
  })
export default class ProductDescription extends Vue {}
</script>
