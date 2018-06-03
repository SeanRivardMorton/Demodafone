<!--
This is typically where a loyout would go, though for this demonstration
I'm not going to be building a laout.
-->
<template>
  <div class="columns is-centered">
    <product-browser class="column is-11"></product-browser>
  </div>
</template>

<!-- This project uses Typescript! -->
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


<!-- Scoped SCSS for components. Pretty awesome. -->
<style lang="scss" scoped>
.columns {
  padding-top: 2rem;
}
</style>
