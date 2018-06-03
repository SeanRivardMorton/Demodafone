<template>
    <div class="memoryPicker">
        <p>Capacity:
            <strong>{{ selectedMemory.value}}</strong>
        </p>
        <div v-for="memory in memoryOptions" :key="memory.id" class="inline">
            <div :class="{ selected: memory.active, border: true }">
                <div class="memory select" @click="setMemory(memory.value)">
                    {{ removeCharacters(memory.value) }}
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component
export default class MemoryPicker extends Vue {
    @Prop() private memoryOptions!: Array<string>;
    @Getter('phoneMemory') selectedMemory!: string;
    @Action('setMemory') setMemory!: null;

    removeCharacters(string: string) {
        return string.replace(/[^0-9]+/g, '');
    }

}
</script>

<style lang='scss' scoped>
.inline {
  display: inline;
}

.memory {
  text-align: center;
  vertical-align: middle;
  line-height: 2.5rem;
}

.border {
  border-radius: 10px;
  display: inline-block;
  //   box-shadow: 0px 0px 1px 0px black;
  height: 45px;
  width: 45px;
  margin: 0.5rem;
  background-color: #f3f4f3;
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
  }
}
</style>
