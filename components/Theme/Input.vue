<template>
  <div class="w-full p-1 md:w-1/2">
    <label
      class="block px-1 mb-[6px] text-xs font-bold tracking-wide uppercase text-slate-700"
      :for="id || generatedID"
    >
      {{ label }}
    </label>
    <input
      class="block w-full px-4 py-2 text-sm font-medium border-2 rounded-lg appearance-none text-slate-700 bg-slate-100 border-slate-200 focus:outline-none focus:bg-white focus:border-slate-300"
      :type="type"
      :placeholder="placeholder"
      :id="id || generatedID"
      v-model="value"
    />
  </div>
</template>

<script setup>
const generatedID = useId();
defineProps({
  label: {
    type: String,
    default: "Label",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    default: "",
  },
});

const value = defineModel();
</script>
