<template>
    <div class="PhoneOptionsPicker">
        <div class="columns has-text-left">
            <div class="column">
                <color-picker :colorOptions="colorOptions"></color-picker>
            </div>
            <div class="column">
                <memory-picker :memoryOptions="capacityOptions"></memory-picker>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ColorPicker from '@/components/General/ColorPicker.vue';
import MemoryPicker from '@/components/General/MemoryPicker.vue';

@Component({
  components: {
  ColorPicker,
  MemoryPicker
  },
  })
export default class ProductOptionsPicker extends Vue {
    @Prop() productOptions!: { colorOptions: object, memoryOptions: object };

    get colorOptions(): object {
      return this.productOptions.colorOptions;
    }

    get capacityOptions(): object {
      return this.productOptions.memoryOptions;
    }
}
</script>

<style lang='scss' scoped>
.columns {
  margin-top: 2rem;
}
</style>
