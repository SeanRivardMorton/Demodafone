<template>
    <div class="PhoneOptionsPicker">
        <div class="layout">
            <div class="flex-box">
                <color-picker :colorOptions="colorOptions"></color-picker>
            </div>
            <div class="flex-box">
                <memory-picker :memoryOptions="memoryOptions"></memory-picker>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
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

    get memoryOptions(): object {
      return this.productOptions.memoryOptions;
    }
}
</script>

<style lang='scss' scoped>
.layout {
    text-align: left;
    .flex-box {
        width: 100%;
    }
}
</style>
