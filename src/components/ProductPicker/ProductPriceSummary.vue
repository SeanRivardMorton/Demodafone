<template>
    <div class="PricePlan">
        <div class="layout container">
            <div class="flex-box content-block">
                <p>from
                    <strong>1149</strong> upfront cost</p>
            </div>
            <!-- <span class="divider"></span> -->
            <div class="flex-box content-block">
                <p>When you pay
                    <strong>$43.20</strong> a month</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProductPriceSummary extends Vue {}
</script>

<style lang='scss' scoped>
.PricePlan {
  background-color: #f4f4f4;
  p {
    color: black;
  }
  strong {
    font-size: 1.5rem;
    color: darken(#cd0d1a, 5%);
  }
}

.flex-box {
  width: 50%;
  float: left;
  padding: 20px;
  position: relative;

  &:first-child:after {
    content: '';
    top: 10px;
    bottom: 10px;
    left: 100%;
    width: 1px;
    background: #dddddd;
    position: absolute;
  }
}
</style>
