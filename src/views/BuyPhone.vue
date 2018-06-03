<template>
  <div class="columns is-centered">
    <product-browser class="column is-11"></product-browser>
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

<style lang="scss" scoped>
.columns {
  padding-top: 2rem;
}
</style>
