<template>
  <section>
    <div class="flex flex-col mt-6 text-sm font-medium text-green-50">
      <NuxtLink
        class="nav-link tooltip-left"
        :class="navLinkClassess"
        data-tip="الرئيسية"
        :to="'/'"
      >
        <span class="min-w-[20px]">
          <HomeIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed || mobile">{{ $t("home") }}</p>
      </NuxtLink>
    </div>

    <hr class="border-[#4ea78b] my-2" />

    <div
      class="flex flex-col text-sm font-medium text-green-50 scrollSmaller"
    ></div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.nav-link {
  @apply flex w-full gap-2 items-center p-3 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-xl duration-150;
}
.nav-link p {
  @apply duration-150;
}
.nav-link:hover p {
  @apply px-2;
}

.nuxt-link-active {
  @apply bg-white text-theme1 hover:bg-white;
}

.nuxt-link-exact-active {
  @apply bg-white text-theme1 hover:bg-white;
}
</style>
