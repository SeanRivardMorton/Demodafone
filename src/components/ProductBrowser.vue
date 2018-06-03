<template>
  <div class="productBrowser layout">
    <div class="flex-box product_display">
      <img :src="productMedia" alt="">
    </div>
    <div class="flex-box">
      <product-description :productDetails="productDetails"></product-description>
      <product-options-picker :productOptions="productOptions"></product-options-picker>
      <product-price-summary :priceInfo="currentProduct[version].priceInfo"></product-price-summary>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import ProductDescription from '@/components/ProductBrowser/ProductDescription.vue';
import ProductOptionsPicker from '@/components/ProductBrowser/ProductOptionsPicker.vue';
import ProductPriceSummary from '@/components/ProductBrowser/ProductPriceSummary.vue';

interface product {
  colourHex: string,
  colourName: string,
  deviceId: string,
  displayDescription: string,
  leadPlanId: string,
  memory: string,
  merchandisingMedia: Array<merchandisingMedia>,
  memoryOptions: Array<memoryOptions>
}

interface merchandisingMedia {
  id: string,
  value: string
}

interface memoryOptions {
  bundlePrice: string,
  hardwarePrice: string
}

interface hardWarePrice {
  hardwareId: string,
  oneOffDiscountPrice: price,
  oneOffPrice: price
}

interface bundlePrice {
  bundleId: string,
  monthlyDiscountPrice: price,
  monthlyPrice: price
}

interface price {
  gross: string,
  net: string,
  vat: string
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
    @Getter('getOptions') getOptions!: object;
    @Getter('productGroupName') productGroupName!: string;

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
        memoryOptions: this.capacityOptions,
        colorOptions: this.colorOptions,
      };
    }

    get capacityOptions(): object {
      const prop: string = 'memory';
      return this.getOptions(prop)
        .map((obj: any) => obj[prop]);
    }

    get colorOptions(): object {
      return this.getOptions('colourName')
        .map((obj: { colourName: string, colourHex: string}) => {
        return { color: obj.colourName, hex: obj.colourHex };
      });
    }
}
</script>

<style lang='scss' scoped>
.product_display {
  width: 100%;
  margin: auto;
  img {
    margin: 3rem auto;
    display: block;
  }
}

.productBrowser {
  text-align: left;
}

.layout {
  display: flex;
  flex-flow: row;
  .flex-box {
    height: 100%;
    margin: auto;
  }
}
</style>
