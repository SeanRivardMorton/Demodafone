<template>
  <div>
    <p>Colour:
      <strong>{{ selectedColor }}</strong>
    </p>
    <div v-for="color in colorOptions" :key="color.id" class="inline">
      <div :class="{optionPicker__button_active: color.active, border: true}">
        <div class="optionPicker__button gradient" :style="{ backgroundColor: color.hex }" @click="setColor(color.color)">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

interface colorOptions {
    color: string;
    hex: string;
  }

@Component
export default class ColorPicker extends Vue {
    @Prop() private colorOptions!: Array<colorOptions>
    @Getter('phoneColor') selectedColor!: string
    @Action('setColor') setColor!: null
}
</script>

<style lang='scss' scoped>
.gradient {
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 45%;
    bottom: 0;
    border-radius: 7px;
    background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.418)) left
      repeat;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.315)) left repeat;
  }
}
</style>
