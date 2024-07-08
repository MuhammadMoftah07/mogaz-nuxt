export const useDataStore = defineStore("useDataStore", {
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
      $http("/data", {
        params: {
          per_page: 5,
        },
      })
        .then((res) => {
          this.data = res.response;
          return res;
        })
        .catch((err) => {
          useToast().errorHandler(err);
        });
    },
  },
});
