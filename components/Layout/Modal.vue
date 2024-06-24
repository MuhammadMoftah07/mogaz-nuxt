<template>
  <button class="btn" @click="modal = !modal">open modal</button>

  <dialog class="modal" :class="modal ? 'modal-open' : ''">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>

      <footer class="gap-2 modal-action">
        <button class="font-medium btn h-9 btn-primary">Submit</button>
        <button
          @click="modal = false"
          class="font-medium btn h-9 btn-ghost text-slate-700"
        >
          Close
        </button>
      </footer>
    </div>

    <aside method="dialog" class="modal-backdrop" @click="modal = false">
      <button>close</button>
    </aside>
  </dialog>
</template>

<script lang="ts" setup>
const modal = ref(false);
</script>

<style></style>
