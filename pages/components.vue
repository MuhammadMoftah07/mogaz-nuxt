<template>
  <main>
    <div class="text-xl font-semibold text-slate-600">Components page</div>

    <section>
      <h3 class="title">Modal</h3>

      <LayoutModal />
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.title {
  @apply text-xl text-slate-600 font-semibold my-6 pt-6 border-t-2;
}
</style>
