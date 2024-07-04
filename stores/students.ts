export const useStudentStore = defineStore("useStudentStore", {
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
      $http("/admin/users", {
        params: {
          role_id: 1,
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
