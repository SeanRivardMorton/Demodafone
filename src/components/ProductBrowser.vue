<template>
  <div class="productBrowser">
    <product-description :phoneData="phoneData"></product-description>
    <product-options-picker :phoneOptions="phoneOptions"></product-options-picker>
    <product-price-summary></product-price-summary>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { Component, Vue } from 'vue-property-decorator';
import ProductDescription from '@/components/ProductBrowser/ProductDescription.vue';
import ProductOptionsPicker from '@/components/ProductBrowser/ProductOptionsPicker.vue';
import ProductPriceSummary from '@/components/ProductBrowser/ProductPriceSummary.vue';

const PHONE_DATA = require('../assets/data/phones.json');

@Component({
  components: {
  ProductDescription,
  ProductOptionsPicker,
  ProductPriceSummary
  },
  })
export default class ProductBrowser extends Vue {
    phoneData = PHONE_DATA[0]

    model = 0
    currentModel = this.phoneData.deviceSummary[this.model]
    phoneOptions = {
      colourName: this.currentModel.colourName,
      colourHex: this.currentModel.colourHex,
      memory: this.currentModel.memory,
    }
}
</script>

<style lang='scss' scoped>
.productBrowser {
  text-align: left;
}
</style>