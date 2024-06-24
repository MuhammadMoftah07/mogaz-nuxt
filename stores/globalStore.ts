export const useGlobalStore = defineStore("useGlobalStore", {
  state: () => {
    return {
      variable1: "value1",
      // activeSideTab: { id: 1 },
      activeSideTab: { id: "GII" },
      activeSector: 1,
      sideCollapsed: false,
    };
  },

  getters: {
    getter1: (state) => state.variable1.toUpperCase(),
  },

  actions: {
    action1() {
      // logic for action1
    },
    setSector(sector: any) {
      this.activeSector = sector;
      localStorage.setItem("activeSector", sector);
    },
  },
});
