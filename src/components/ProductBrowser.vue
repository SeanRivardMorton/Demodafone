<!--
COMPONENT HIERARCHY
ProductBrowser
\-> Product Description
  \-> Gold Stars component
\-> Product Options
  \-> Color Picker
  \=> Capacity Picker
\-> Product Price Summary
-->

<template>
  <div class="columns">
    <div class="column is-offset-1">
      <img :src="productMedia" alt="">
    </div>
    <div class="column productDetails">
      <product-description :productDetails="productDetails"></product-description>
      <product-options-picker :productOptions="productOptions"></product-options-picker>
      <product-price-summary :priceInfo="currentProduct[version].priceInfo"></product-price-summary>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import ProductDescription from '@/components/ProductBrowser/ProductDescription.vue';
import ProductOptionsPicker from '@/components/ProductBrowser/ProductOptionsPicker.vue';
import ProductPriceSummary from '@/components/ProductBrowser/ProductPriceSummary.vue';


  interface product {
    colourHex: string;
    colourName: string;
    deviceId: string;
    displayDescription: string;
    leadPlanId: string;
    memory: string;
    merchandisingMedia: Array<merchandisingMedia>;
    memoryOptions: Array<memoryOptions>;
  }

  interface merchandisingMedia {
    id: string;
    value: string;
  }

  interface memoryOptions {
    bundlePrice: string;
    hardwarePrice: string;
  }

  interface colorOptions {
    active: boolean,
    color: string,
    hex: string
  }

  interface capacityOptions {
    value: string,
    active: string
  }

@Component({
  components: {
  ProductDescription,
  ProductOptionsPicker,
  ProductPriceSummary
  },
  })
export default class ProductBrowser extends Vue {
    @Getter('productRating') productRating!: string;
    @Getter('currentProduct') currentProduct!: Array<product>;
    @Getter('productMedia') productMedia!: string;
    @Getter('getOptions') getOptions!: Function;
    @Getter('productGroupName') productGroupName!: string;
    @Getter('phoneColor') selectedColor!: string
    @Getter('phoneCapacity') selectedCapacity!: string;

    version: number = 0;

    get productDetails() {
      return {
        productRating: this.productRating,
        productDescription: this.currentProduct[this.version].displayDescription,
        productGroupName: this.productGroupName
      }
    }

    get productOptions() {
      return {
        capacityOptions: this.capacityOptions,
        colorOptions: this.colorOptions,
      };
    }

    get capacityOptions(): Array<capacityOptions> {
      const prop: string = 'memory';
      return this.getOptions(prop)
        .map((obj: any) => {
          return { value: obj[prop], active: obj[prop] === this.selectedCapacity }
        });
    }

    get colorOptions(): Array<colorOptions> {
      return this.getOptions('colourName')
        .map((obj: { colourName: string, colourHex: string}) => {
        return { color: obj.colourName, hex: obj.colourHex, active: obj.colourName === this.selectedColor}
      });
    }
}
</script>

<style lang='scss' scoped>
img {
  height: 25rem;
}

//Added padding for when viewing on mobile.
.productDetails {
  padding-left: 2rem;
}
</style>
