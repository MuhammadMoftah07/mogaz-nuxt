<template>
  <nav
    class="relative px-2 bg-gradient-to-b from-theme2 to-theme1"
    @mouseenter="collapseBtn = true"
    @mouseleave="collapseBtn = false"
  >
    <LayoutSidebarNavigations class="w-full" />
    <!-- collapse button  -->
    <transition name="navbtn">
      <button
        class="absolute top-0 bottom-0 z-10 h-16 p-1 m-auto rounded-r-none cursor-pointer w-7 text-emerald-50 btn -left-7 bg-theme1 hover:bg-theme1 hover:contrast-125"
        @click="
          useGlobalStore().sideCollapsed = !useGlobalStore().sideCollapsed
        "
        v-if="collapseBtn"
      >
        <IconsRightArrowIcon2
          class="w-full scale-125"
          :class="sideCollapsed ? 'rotate-180' : ' '"
        />
      </button>
    </transition>
  </nav>
</template>

<script lang="ts" setup>
const collapseBtn = ref(false);
const sideCollapsed = computed(() => useGlobalStore().sideCollapsed);
</script>

<style scoped>
/* Side Nav toggle button  */
.navbtn-enter {
  transition: opacity 0.2s ease-out,
    transform 0.2s cubic-bezier(0.5, 0, 0.7, 0.4);
  transition-delay: calc(0.2s * (var(--total) - var(--i)));

  @apply rtl:translate-x-4 ltr:-translate-x-4;
}

.navbtn-leave-to {
  transition: opacity 0.2s ease-out,
    transform 0.2s cubic-bezier(0.5, 0, 0.7, 0.4);
  transition-delay: calc(0.2s * (var(--total) - var(--i)));

  @apply rtl:translate-x-4 ltr:-translate-x-4;
}
</style>
