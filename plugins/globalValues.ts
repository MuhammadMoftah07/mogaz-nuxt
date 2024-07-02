export default defineNuxtPlugin(() => {
  return {
    provide: {
      modal: ref("modal"),
      // modal: reactive("modal"),
      // modal: "modal",
      closeModal: () => {
        // useGlobalStore().modal = "";
        useNuxtApp().$modal.value = "";
      },
    },
  };
});
