<template>
    <div class="PhoneOptionsPicker">
        <div class="layout">
            <div class="flex-box">
                <p>Colour
                    <strong>{{ phoneOptions.colourName }}</strong>
                </p>
            </div>
            <div class="flex-box">
                <p>Capacity
                    <strong>64GB</strong>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductOptionsPicker extends Vue {
    @Prop() phoneOptions!: string;
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
