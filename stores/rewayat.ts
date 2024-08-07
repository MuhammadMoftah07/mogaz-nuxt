export const useRewayaStore = defineStore("useRewayaStore", {
  state: () => {
    return reactive({
      data: [],
    });
  },

  getters: {
    getter1: (state) => state.variable1.toUpperCase(),
  },

  actions: {
    fetchData() {
      $http("/rewaya")
        .then((res) => {
          this.data = res.response.data;
          return res;
        })
        .catch((err) => {
          useToast().errorHandler(err);
        });
    },
  },
});
