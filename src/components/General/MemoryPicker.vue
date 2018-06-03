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
.memory {
  text-align: center;
  vertical-align: middle;
  line-height: 2.5rem;
  background-color: #f3f4f3;
}
</style>
