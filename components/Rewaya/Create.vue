<template>
  <LayoutModal>
    <template #modal-title> انشاء رواية جديدة </template>

    <template #modal-body>
      <section class="grid gap-2">
        <ThemeInput label="عنوان الرواية" v-model="title" />
      </section>
    </template>

    <template #modal-footer>
      <footer class="gap-2 modal-action">
        <button
          class="btn h-9 btn-theme"
          :disabled="!title || loading"
          @click="submit()"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          إتمام
        </button>
        <button
          @click="$modal.value = false"
          class="font-medium btn h-9 btn-ghost text-slate-700"
        >
          اغلاق
        </button>
      </footer>
    </template>
  </LayoutModal>
</template>

<script lang="ts" setup>
const title = ref("");
const loading = ref(false);

const submit = () => {
  loading.value = true;
  $http("/rewaya", {
    method: "post",
    body: {
      title: title.value,
    },
  })
    .then(() => {
      useRewayaStore().fetchData();
      useToast().showSuccess("تمت الاضافة بنجاح");
      useNuxtApp().$closeModal();
    })
    .catch((err) => {
      useToast().errorHandler(err);
    });
};
</script>
