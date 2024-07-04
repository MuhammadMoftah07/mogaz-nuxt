export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth();
  if (status.value == "unauthenticated") {
    nextTick(() => {
      // await useRouter().push("/auth/login");
      // This will only be executed on the client side
      useNuxtApp().$toast.info("من فضلك سجل دخول", {
        autoClose: 2000,
      });
      // return navigateTo("/auth/login");
    });

    // return abortNavigation();
    return navigateTo("/auth/login");
  }
});
