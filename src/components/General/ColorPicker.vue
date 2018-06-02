<template>
    <div class="colorPicker">
        <p>Colour:
            <strong>{{ selectedColor }}</strong>
        </p>
        <div v-for="color in availableColors" :key="color.id" class="inline">
            <!-- <div class="outer-select"> -->
            <div class="selected">
                <div class="gradient">
                    <div class="select" :style="color.style" @click="setColor(color.color)">

                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
/* eslint-disable */

@Component
export default class ColorPicker extends Vue {
    @Prop() private colorOptions!: object
    @Getter('phoneColor') selectedColor
    @Action('setColor') setColor
    style = {
        'background-color': 'red'
    }

    get availableColors() {
      const availableColors = [];
      Object.entries(this.colorOptions).forEach(([key, val]) => {
        availableColors.push({ color: key, style: { 'background-color': val } });
        return availableColors;
      });
      return availableColors;
    }
}
</script>

<style lang='scss' scoped>
.inline {
  display: inline;
}

.selected {
  height: 45px;
  width: 45px;
  //   background-color: red;
  //   margin: 0.5rem;
  display: inline-block;
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid green;
  }
}

.select {
  margin: 1.9px;
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 7px;
  box-shadow: 0px 1px 1px 0px black;
  position: absolute;
  //   background-color: #f8e7dc;
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

.gradient:after {
  //   height: 100%;
  //   width: 100%;
  //   position: relative;
  //   z-index: 10;
  position: relative;
  display: inline-block;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 55%;
    bottom: 0;
    // background: -webkit-linear-gradient(transparent, #f8e7dc) left repeat;
    background: linear-gradient(transparent, black) left repeat;
    // background: linear-gradient(
    //   to bottom,
    //   rgba(0, 0, 0, 0) 0%,
    //   rgba(0, 0, 0, 0) 59%,
    //   rgba(0, 0, 0, 0.65) 100%
    // );
  }
}
</style>
