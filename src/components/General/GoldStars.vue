<template>
    <div class="GoldStars">
        <div class="stars" v-for="n in rating" :key="n.id">
            <!-- I would use the Vodafone star sprites if available to me -->
            ⭐
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GoldStars extends Vue {
    @Prop() private rating!: number
}
</script>

<style lang='scss' scoped>
.stars {
  display: inline;
}
</style>
