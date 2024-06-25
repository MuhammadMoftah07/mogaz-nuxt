<template>
  <section>
    <div class="flex flex-col mt-6 text-sm font-medium text-green-50">
      <NuxtLink
        class="nav-link tooltip tooltip-left"
        :class="navLinkClassess"
        data-tip="الرئيسية"
        :to="'/'"
        v-auto-animate="{ duration: 500 }"
      >
        <span class="min-w-[20px]">
          <IconsHomeIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الرئيسية</p>
      </NuxtLink>

      <NuxtLink
        class="nav-link tooltip tooltip-left"
        :class="navLinkClassess"
        data-tip="الروايات"
        :to="'/rewayat'"
        v-auto-animate="{ duration: 500 }"
      >
        <span class="min-w-[20px]">
          <IconsBookIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الروايات</p>
      </NuxtLink>

      <NuxtLink
        class="nav-link tooltip tooltip-left"
        :class="navLinkClassess"
        data-tip="الشيوخ"
        :to="'/rewayat'"
        v-auto-animate="{ duration: 500 }"
      >
        <span class="min-w-[20px]">
          <IconsTeacherIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الشيوخ</p>
      </NuxtLink>

      <NuxtLink
        class="nav-link tooltip tooltip-left"
        :class="navLinkClassess"
        data-tip="الطلاب"
        :to="'/rewayat'"
        v-auto-animate="{ duration: 500 }"
      >
        <span class="min-w-[20px]">
          <IconsStudentIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الطلاب</p>
      </NuxtLink>
    </div>

    <hr class="border-[#4ea78b] my-2" />

    <div
      class="flex flex-col text-sm font-medium text-green-50 scrollSmaller"
    ></div>
  </section>
</template>

<script lang="ts" setup>
const sideCollapsed = computed(() => useGlobalStore().sideCollapsed);
</script>

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
