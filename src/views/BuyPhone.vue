<template>
  <div class="ProductView layout">
    <product-browser></product-browser>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import ProductBrowser from '@/components/ProductBrowser.vue';

@Component({
  components: {
  ProductBrowser
  },
  })
export default class BuyPhone extends Vue {}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-flow: row;
  .flex-box {
    height: 100%;
    margin: auto;
  }
}

.product_display {
  img {
    height: 40vh;
  }
}
</style>
