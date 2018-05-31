<template>
    <div class="GoldStars">
        <div class="stars" v-for="star in stars" :key="star.id">
            ⭐
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoldStars extends Vue {
    stars = 2;
}
</script>

<style lang='scss' scoped>
.stars {
  display: inline;
}
</style>
