export const useCourseStore = defineStore("useCourseStore", {
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
      $http("/admin/courses")
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
