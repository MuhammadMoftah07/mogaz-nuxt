<template>
  <main class="">
    <ThemeTitle class="mb-6" text=" الطلاب" />
    <ThemeTable :items="data" :headers="headers" :loading="loading == 'table'">
      <template #verify="item">
        <span
          class="grid px-2 py-1 text-xs rounded-sm w-fit bg-emerald-500 place-content-center text-emerald-50"
          v-if="item.verify == 1"
        >
          نعم
        </span>
        <span
          v-if="item.verify == 0"
          class="grid px-2 py-1 text-xs bg-red-500 rounded-sm w-fit place-content-center text-red-50"
        >
          لا</span
        >
      </template>
      <template #actions="item">
        <div class="flex items-center gap-2">
          <button
            v-if="item.verify == '0'"
            type="button"
            class="action-btn tooltip"
            data-tip="ارسال OTP"
            :disabled="loading == 'send-otp'"
            @click="sendOTP(item)"
          >
            <span
              v-if="loading == 'send-otp'"
              class="w-4 h-4 loading loading-spinner"
            ></span>
            <IconsSendIcon v-else class="w-5 h-[18px]" />
          </button>

          <button
            v-if="item.verify == '1' && item.status.title == 'pending'"
            type="button"
            class="action-btn tooltip"
            data-tip="ارسل الاختبار المبدئي"
            @click="(activeData = item), ($modal.value = 'GeneralTest')"
          >
            <IconsAttendenceScheduleIcon class="w-5 h-[18px]" />
          </button>

          <button
            v-if="item.verify == '1' && item.status.title == 'general_test'"
            type="button"
            class="action-btn tooltip"
            data-tip=" نتيجة الاختبار المبدئي"
            @click="(activeData = item), ($modal.value = 'GeneralTestApproval')"
          >
            <IconsApprovalIcon class="w-5 h-[18px]" />
          </button>

          <button
            v-if="item.verify == '1' && item.status.title == 'course_request'"
            type="button"
            class="action-btn tooltip"
            data-tip="الموافقة علي الكورس"
            :disabled="loading == 'course-approval'"
            @click="courseApproval(item)"
          >
            <span
              v-if="loading == 'course-approval'"
              class="w-4 h-4 loading loading-spinner"
            ></span>
            <IconsCheckIcon2 class="w-5 h-[18px]" />
          </button>
          <!-- 
          <button type="button" class="action-btn tooltip" data-tip="تعديل">
            <IconsEditIcon2 class="w-5 h-[18px]" />
          </button> -->
        </div>
      </template>
    </ThemeTable>

    <StudentsGeneralTestModal
      :activeData="activeData"
      v-if="$modal.value == 'GeneralTest'"
    />
    <StudentsGeneralTestApprovalModal
      :activeData="activeData"
      v-if="$modal.value == 'GeneralTestApproval'"
    />
    <!-- <ThemePlusButton @click.native="$modal.value = 'CreateRewaya'" /> -->
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});
const $t = useI18n().t;

const loading = ref("");
const activeData = ref("");
await useStudentStore().fetchData();
loading.value = "";
const data = computed(() => useStudentStore().data);

const headers = computed(() => {
  return [
    { text: $t("name"), value: "name" },
    { text: $t("nationality"), value: "nationality" },
    { text: $t("gender"), value: "gender" },
    { text: $t("qualification"), value: "qualification" },
    { text: $t("job"), value: "job" },
    { text: $t("verified"), value: "verify" },
    { text: $t("status"), value: "status.title" },
    { text: $t("course"), value: "user_course_request.course.title" },
    // { text: "ID", value: "id", width: 100 },
    { text: $t("actions"), value: "actions" },
  ];
});

const sendOTP = (item) => {
  loading.value = "send-otp";
  $http(`/user/send-otp/${item.id}`)
    .then(() => {
      loading.value = "";
      useStudentStore().fetchData();
      useToast().showSuccess("تم ارسال الكود بنجاح");
      useNuxtApp().$closeModal();
    })
    .catch((err) => {
      loading.value = "";
      useToast().errorHandler(err);
    });
};
const courseApproval = (item) => {
  loading.value = "course-approval";
  $http(`/admin/approve_courses_requests`, {
    method: "post",
    body: {
      user_id: item.id,
      course_id: item.user_course_request?.course?.id,
    },
  })
    .then(() => {
      loading.value = "";
      useStudentStore().fetchData();
      useToast().showSuccess("تمت الموافقة بنجاح");
      useNuxtApp().$closeModal();
    })
    .catch((err) => {
      loading.value = "";
      useToast().errorHandler(err);
    });
};
</script>

<style></style>
