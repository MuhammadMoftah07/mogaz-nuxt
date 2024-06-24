export const $http = (request, opts) => {
  const config = useRuntimeConfig();

  return $fetch(request, { baseURL: config.public.baseURL, ...opts });
};
