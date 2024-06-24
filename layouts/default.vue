<template>
  <main>
    <LayoutMainHeader />
    <section class="flex">
      <LayoutSidebar
        class="hidden md:flex duration-150 h-[calc(100vh-65px)]"
        :class="sideCollapsed ? 'w-[60px]' : 'w-[200px] '"
      />
      <div
        :class="
          sideCollapsed ? 'md:w-[calc(100%-60px)]' : 'md:w-[calc(100%-200px)]'
        "
        class="w-full"
      >
        <div
          class="bg-slate-50 h-[calc(100vh-65px)] overflow-y-auto overflow-x-hidden"
        >
          <slot />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const sideCollapsed = ref(false);
onBeforeMount(() => {
  const html = document.querySelector("html");
  html.setAttribute("data-theme", "light");
});
</script>

<style></style>
