export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth();
  if (status.value == "unauthenticated") {
    // if (process.client) {
    //   useNuxtApp().$toast.info(ThemeLoginToast, { multiple: false });
    // }
    nextTick(() => {
      // This will only be executed on the client side
      useNuxtApp().$toast.info("من فضلك سجل دخول", {
        autoClose: 2000,
      });
    });
    return navigateTo("/auth/login");
    // return abortNavigation();
  }
});
