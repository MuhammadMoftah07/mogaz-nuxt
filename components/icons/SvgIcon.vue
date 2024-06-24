<template>
  <svg class="svg">
    <use :xlink:href="require(`~/assets/sprite.svg`) + '#' + nameIcon" />
  </svg>
</template>

<script>
export default {
  name: "SVGSprite",
  props: {
    nameIcon: {
      type: [String, Array],
      required: true,
    },
  },
};
</script>

<style>
.svg {
  @apply fill-current;
}
</style>
