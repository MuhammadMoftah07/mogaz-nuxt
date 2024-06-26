<template>
  <section>
    <div class="flex flex-col mt-2 text-sm font-medium text-green-50">
      <NuxtLink
        class="nav-link tooltip-left"
        :class="sideCollapsed ? 'tooltip' : ''"
        data-tip="الرئيسية"
        :to="'/'"
        v-auto-animate="{ duration: 150 }"
      >
        <span class="min-w-[20px]">
          <IconsHomeIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الرئيسية</p>
      </NuxtLink>

      <NuxtLink
        class="nav-link tooltip-left"
        :class="sideCollapsed ? 'tooltip' : ''"
        data-tip="الروايات"
        :to="'/rewayat'"
        v-auto-animate="{ duration: 150 }"
      >
        <span class="min-w-[20px]">
          <IconsBookIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الروايات</p>
      </NuxtLink>

      <NuxtLink
        class="nav-link tooltip-left"
        :class="sideCollapsed ? 'tooltip' : ''"
        data-tip="الشيوخ"
        :to="'/test'"
        v-auto-animate="{ duration: 150 }"
      >
        <span class="min-w-[20px]">
          <IconsTeacherIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الشيوخ</p>
      </NuxtLink>

      <NuxtLink
        class="nav-link tooltip-left"
        :class="sideCollapsed ? 'tooltip' : ''"
        data-tip="الطلاب"
        :to="'/test'"
        v-auto-animate="{ duration: 150 }"
      >
        <span class="min-w-[20px]">
          <IconsStudentIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الطلاب</p>
      </NuxtLink>
    </div>

    <hr class="my-2 border-white/20" />

    <div class="flex flex-col text-sm font-medium text-green-50 scrollSmaller">
      <NuxtLink
        class="nav-link tooltip-left"
        :class="sideCollapsed ? 'tooltip' : ''"
        data-tip="الحساب"
        :to="'/proflie'"
        v-auto-animate="{ duration: 150 }"
      >
        <span class="min-w-[20px]">
          <IconsUserIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">الحساب</p>
      </NuxtLink>

      <button
        @click="useAuth().signOut()"
        class="nav-link tooltip-left !text-red-300"
        :class="sideCollapsed ? 'tooltip' : ''"
        data-tip="تسجيل خروج"
        v-auto-animate="{ duration: 150 }"
      >
        <span class="min-w-[20px]">
          <IconsLogoutIcon class="w-5 h-5" />
        </span>
        <p v-if="!sideCollapsed">تسجيل خروج</p>
      </button>

      <hr class="my-2 border-white/20" />

      <p class="py-1 text-xs text-center text-slate-150">V 1.0</p>
    </div>
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

.router-link-active {
  @apply bg-white text-theme1 hover:bg-white;
}

.router-link-exact-active {
  @apply bg-white text-theme1 hover:bg-white;
}
</style>
