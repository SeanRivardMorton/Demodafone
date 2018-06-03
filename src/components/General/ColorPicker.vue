<template>
  <div class="colorPicker">
    <p>Colour:
      <strong>{{ selectedColor }}</strong>
    </p>
    <div v-for="color in colorOptions" :key="color.id" class="inline">
      <div :class="{selected: color.active, border: true}">
        <!-- <div class="gradient"> -->
        <div class="select" :style="{ backgroundColor: color.hex }" @click="setColor(color.color)">
        </div>
        <!-- </div> -->
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
.inline {
  display: inline;
}

.border {
  height: 45px;
  width: 45px;
  //   background-color: red;
  //   margin: 0.5rem;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid transparent;
}

.selected {
  border-radius: 10px;
  border: 1.5px solid green;
}

$height: 38px;

.select {
  margin: -42% auto;
  /* display: inline-block; */
  top: 50%;
  position: relative;
  width: $height;
  height: $height;
  border-radius: 7px;
  -webkit-box-shadow: 0px 0px 1px 0px black;
  box-shadow: 0px 0px 1px 0px black;
  /* position: absolute; */
  z-index: 0;
  &:after {
    content: '';
    display: block;
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

// .gradient:after {
//   //   height: 100%;
//   //   width: 100%;
//   //   position: relative;
//   //   z-index: 10;
//   position: relative;
//   display: inline-block;
//   &:after {
//     content: '';
//     display: block;
//     position: absolute;
//     width: 100%;
//     height: 55%;
//     bottom: 0;
//     // background: -webkit-linear-gradient(transparent, #f8e7dc) left repeat;
//     background: linear-gradient(transparent, black) left repeat;
//     // background: linear-gradient(
//     //   to bottom,
//     //   rgba(0, 0, 0, 0) 0%,
//     //   rgba(0, 0, 0, 0) 59%,
//     //   rgba(0, 0, 0, 0.65) 100%
//     // );
//   }
// }
</style>
