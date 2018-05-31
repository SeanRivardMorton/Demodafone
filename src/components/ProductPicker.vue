<template>
  <div class="productPicker">
    <product-description></product-description>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import { Component, Vue } from 'vue-property-decorator';
import ProductDescription from '@/components/ProductPicker/ProductDescription.vue';

@Component({
  components: {
  ProductDescription,
  },
  })
export default class ProductPicker extends Vue {}
</script>

<style lang='scss' scoped>
.productPicker {
  text-align: left;
}
</style>
