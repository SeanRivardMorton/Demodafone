<template>
    <div class="PhoneOptionsPicker">
        <div class="columns has-text-left">
            <div class="column">
                <color-picker :colorOptions="colorOptions"></color-picker>
            </div>
            <div class="column">
                <capacity-picker :capacityOptions="capacityOptions"></capacity-picker>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ColorPicker from '@/components/General/ColorPicker.vue';
import CapacityPicker from '@/components/General/CapacityPicker.vue';

@Component({
  components: {
  ColorPicker,
  CapacityPicker
  },
  })
export default class ProductOptionsPicker extends Vue {
    @Prop() productOptions!: { colorOptions: object, capacityOptions: object };

    get colorOptions(): object {
      return this.productOptions.colorOptions;
    }

    get capacityOptions(): object {
      return this.productOptions.capacityOptions;
    }
}
</script>

<style lang='scss' scoped>
.columns {
  margin-top: 2rem;
}
</style>
