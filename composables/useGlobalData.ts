export const useSidebarSectors = () => {
  return useState("sidebarSectors", () => [
    { id: "1", label: "Retail" },
    { id: "2", label: "Construction" },
    { id: "3", label: "Real Estate" },
  ]);
};
