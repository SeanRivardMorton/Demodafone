<template>
    <div class="memoryPicker">
        <p>Capacity:
            <strong>64GB</strong>
        </p>
        <div v-for="memory in availableMemory" :key="memory.id" class="inline">
            <div class="picker">
                <div class="memory">
                    {{ memory.memory }}
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MemoryPicker extends Vue {
    @Prop() private memoryOptions!: object

    get availableMemory() {
      const availableMemory = [];
      Object.keys(this.memoryOptions).forEach((key) => {
        const newKey = key.replace(/[^0-9]+/g, '');
        availableMemory.push({ memory: newKey });
        return availableMemory;
      });
      return availableMemory;
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

.picker {
  background-color: #f3f4f3;
  box-shadow: 0px 0px 1px 0px black;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 10px;
  margin: 0.5rem;
  display: inline-block;
  &:hover {
    background-color: #f8e7dc;
  }
}
</style>
