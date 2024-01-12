<script lang="ts" setup>
  const props = defineProps({
    maxWidth: {
      type: String,
      required: false,
      default: () => '450px'
    },
    centered: {
      type: Boolean,
      required: false,
      default: () => false
    }
  });
</script>

<template>
  <div class="card" v-bind:class="{centered}">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @import 'assets/sass/variables';

  .card {
    padding: 20px;
    border: 1px solid $grey_rgba_opacity;
    max-width: v-bind(maxWidth);
    width: 100%;
    border-radius: 4px;
    position: relative;
    &.centered {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>