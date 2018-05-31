<template>
  <div class="ProductView layout">
    <div class="flex-box product_display">
      <img src="../assets/phones/Apple_iPhone_8_Gold-full-product-front.png" alt="">
    </div>
    <div class="flex-box">
      <product-picker></product-picker>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { Component, Vue } from 'vue-property-decorator';
import ProductPicker from '@/components/ProductPicker.vue';


@Component({
  components: {
  ProductPicker
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
