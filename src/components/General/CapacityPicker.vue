<template>
    <div>
        <p>Capacity:
            <strong>{{ selectedCapacity}}</strong>
        </p>
        <div v-for="capacity in capacityOptions" :key="capacity.id" class="inline">
            <div :class="{ optionPicker__button_active: capacity.active, border: true }">
                <div class="optionPicker__button" @click="setCapacity(capacity.value)">
                    {{ removeCharacters(capacity.value) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component
export default class CapacityPicker extends Vue {
    @Prop() private capacityOptions!: Array<string>;
    @Getter('phoneCapacity') selectedCapacity!: string;
    @Action('setCapacity') setCapacity!: null;

    removeCharacters(string: string) {
        return string.replace(/[^0-9]+/g, '');
    }

}
</script>

<style lang='scss' scoped>
.border {
  position: relative;
  top: -7px;
}
.optionPicker__button {
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  background-color: #f3f4f3;
}
</style>
