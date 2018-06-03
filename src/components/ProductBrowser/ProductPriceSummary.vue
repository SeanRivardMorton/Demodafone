<template>
  <div class="columns has-text-left">
    <div class="column is-6 productSummary__card">
      <p>from
        <strong>£1{{ upfrontCost }}</strong> upfront cost</p>
    </div>
    <div class="column is-6 productSummary__card">
      <p>When you pay
        <strong>£{{ monthlyRate }}</strong> a month</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface hardWarePrice {
  hardwareId: string,
  oneOffDiscountPrice: any,
  oneOffPrice: any
}

interface  bundlePrice {
  bundleId: string,
  monthlyDiscountPrice: any,
  monthlyPrice: {
    gross: string,
    net: string,
    vat: string
  }
}

@Component
export default class ProductPriceSummary extends Vue {
  @Prop() priceInfo!: any;

  get upfrontCost() {
    return this.priceInfo.hardwarePrice.oneOffPrice.gross;
  }

  get monthlyRate() {
    return this.priceInfo.bundlePrice.monthlyPrice.gross;
  }
}
</script>

<style lang='scss' scoped>
.columns {
  margin-top: 5rem;
  background-color: #f4f4f4;
  p {
    color: black;
  }
  strong {
    font-size: 1.5rem;
    color: darken(#cd0d1a, 5%);
  }
}

$verticalDivider: 15px;
.productSummary__card {
  padding: 30px;
  position: relative;
  &:first-child:after {
    content: '';
    top: $verticalDivider;
    bottom: $verticalDivider;
    left: 100%;
    width: 1px;
    background: #dddddd;
    position: absolute;
  }
}
</style>
