<!--
This is the main component card, which passes data down to its children

COMPONENT HIERARCHY
ProductBrowser
\-> Product Description
  \-> Gold Stars component
\-> Product Options
  \-> Color Picker
  \=> Capacity Picker
\-> Product Price Summary

TEMPLATE?
It's technically javascript, Vue also supports JSX, or in this case, TSX.

TYPESCRIPT
There's probably a better place to put my interfaces, but they're here for now.
Using Typescript makes javascript easier to comprehend, making components
more maintainable, and reusable.

VUEX, A.K.A FLUX, LIKE REDUX, MOBX
Some components needed properties that would require more massaging,
I ended up using more Vuex than probably necessary, but I think
it makes it a bit more cleaner to read? maybe?

STYLE - BULMA
I originally made my own css rules for flex-box grid,
but decided that Vodafone is also probably using a css
library with grid support, so I thought I my as well use
one too.

SCSS
I am also using SCSS as a preprocessor.

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

import ProductDescription from '@/components/ProductBrowser/ProductDescription.vue';
import ProductOptionsPicker from '@/components/ProductBrowser/ProductOptionsPicker.vue';
import ProductPriceSummary from '@/components/ProductBrowser/ProductPriceSummary.vue';

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
