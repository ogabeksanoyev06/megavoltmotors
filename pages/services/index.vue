<template>
  <div class="py-[40px]">
    <main-loading v-if="loading" />
    <div class="container" v-else>
      <div class="flex flex-col mb-[40px]">
        <span class="text-white font-semibold text-2xl md:text-[50px]">
          Bizning servislar
        </span>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
        <div
          v-for="item in services"
          :key="item.id"
          data-aos="fade-up"
          :data-aos-delay="(i + 1) * 100"
        >
          <div
            class="hover:bg-[#00FFFF] ease-out transition-all flex flex-col lg:flex-row w-full bg-[#FBFAFF] rounded lg:gap-10 lg:p-10 p-3 min-h-[250px]"
          >
            <div class="flex flex-col gap-4 flex-1 order-2 lg:order-1">
              <p
                class="xs:text-[18px] lg:text-[20px] text-secondary capitalize font-bold"
              >
                {{ item[$localeKey("title")] }}
              </p>
              <p class="text-[14px] xs:hidden lg:block">
                {{ item[$localeKey("description")] }}
              </p>
            </div>
            <div class="lg:max-w-[150px] w-full order-1 lg:order-2">
              <img :src="item.image" alt="" class="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[30px]">
        <button
          @click="isModal = true"
          class="w-full md:w-auto justify-center md:justify-start rounded-[8px] py-3 px-8 bg-[#00ffff] bg-opacity-50 flex items-center gap-2 text-base leading-6 font-normal text-white transition-all hover:bg-opacity-20 active:scale-95"
        >
          Biz bilan bog'lanish
        </button>
      </div>
    </div>
    <feedback-modal :value="isModal" @close="isModal = false" />
  </div>
</template>

<script>
import FeedbackModal from "../../components/shared-components/Feedback-modal.vue";
import MainLoading from "../../components/shared-components/MainLoading.vue";
export default {
  components: { MainLoading, FeedbackModal },
  name: "service",
  data() {
    return {
      loading: false,
      isModal: false,
      services: [],
    };
  },
  methods: {
    getServices() {
      this.loading = true;
      this.$axios
        .$get("services/")
        .then((response) => {
          this.services = response;
        })
        .catch((error) => {
          console.error("Malumotlarni olishda xato yuz berdi:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getServices();
  },
};
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aqua;
}
</style>
