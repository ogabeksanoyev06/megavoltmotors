<template>
  <div class="py-[40px]">
    <main-loading v-if="loading" />
    <div class="container" v-else>
      <div class="flex flex-col mb-[40px]">
        <span class="text-white font-semibold text-2xl md:text-[50px]">
          {{ $t("text.katalog") }}
        </span>
      </div>
      <div class="flex flex-wrap gap-5 mb-[20px]">
        <button
          class="transition-all h-10 px-3 min-w-[80px] border border-transparent rounded-md text-base text-[#000] font-medium text-white bg-[#00FFFF] hover:bg-[#fff] hover:text-[#00FFFF] focus:outline-none"
          v-for="item in category"
          :key="item.id"
          @click="selectedCategoryId(item.id)"
        >
          {{ item.name }}
        </button>
      </div>
      <div
        class="grid 2sm:grid-cols-1 3sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[60px]"
      >
        <div
          v-for="(car, i) in categoryCarList"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="(i + 1) * 100"
        >
          <div class="bg-white card-hover">
            <div class="flex flex-col">
              <div
                class="flex flex-col items-center text-center gap-[4px] py-[30px] px-[10px]"
              >
                <span class="text-base font-bold">{{ car.name_uz }}</span>
                <span class="text-sm text-brand-orange">{{ car.power }}</span>
              </div>
              <div class="">
                <img
                  :src="
                    'https://api.megavoltmotors.uz' + car.images[0].image
                  "
                  class="w-full h-[200px] object-cover"
                  alt="Car image"
                />
              </div>
              <div class="p-[15px] sm:pb-[0]">
                <p class="text-base font-bold mb-[12px]">2023</p>
                <div class="flex flex-wrap items-center gap-[5px] mb-[40px]">
                  <div class="flex items-center gap-[5px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.04 16.3731C20.8922 14.6823 21.1895 12.7657 20.8894 10.8962C20.5894 9.02669 19.7074 7.29941 18.3689 5.96016C17.0305 4.6209 15.3037 3.7379 13.4343 3.4368C11.565 3.1357 9.6483 3.43184 7.95699 4.28308M5.63699 5.96108C3.95035 7.65011 3.00375 9.93998 3.00543 12.3269C3.00712 14.7139 3.95696 17.0024 5.64599 18.6891C7.33502 20.3757 9.62489 21.3223 12.0119 21.3206C14.3988 21.3189 16.6873 20.3691 18.374 18.6801M10.595 10.9011C10.2197 11.276 10.0087 11.7846 10.0085 12.315C10.0082 12.8455 10.2186 13.3543 10.5935 13.7296C10.9684 14.1049 11.477 14.3159 12.0074 14.3161C12.5379 14.3164 13.0467 14.106 13.422 13.7311M12 14.3251V21.3251M10 12.3251L3.25 10.3251M15.542 11.8681L20.75 10.3251M3 3.32508L21 21.3251"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="text-sm text-gray-500 mr-2"> 15K </span>
                  </div>
                  <div class="flex items-center gap-[5px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6.3252C6 6.05998 6.10536 5.80563 6.29289 5.61809C6.48043 5.43055 6.73478 5.3252 7 5.3252H9C9.26522 5.3252 9.51957 5.43055 9.70711 5.61809C9.89464 5.80563 10 6.05998 10 6.3252V18.3252C10 18.5904 9.89464 18.8448 9.70711 19.0323C9.51957 19.2198 9.26522 19.3252 9 19.3252H7C6.73478 19.3252 6.48043 19.2198 6.29289 19.0323C6.10536 18.8448 6 18.5904 6 18.3252V6.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 6.3252C14 6.05998 14.1054 5.80563 14.2929 5.61809C14.4804 5.43055 14.7348 5.3252 15 5.3252H17C17.2652 5.3252 17.5196 5.43055 17.7071 5.61809C17.8946 5.80563 18 6.05998 18 6.3252V18.3252C18 18.5904 17.8946 18.8448 17.7071 19.0323C17.5196 19.2198 17.2652 19.3252 17 19.3252H15C14.7348 19.3252 14.4804 19.2198 14.2929 19.0323C14.1054 18.8448 14 18.5904 14 18.3252V6.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="text-sm text-gray-500 mr-2"> auto </span>
                  </div>
                  <div class="flex items-center gap-[5px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6.3252C6 6.05998 6.10536 5.80563 6.29289 5.61809C6.48043 5.43055 6.73478 5.3252 7 5.3252H9C9.26522 5.3252 9.51957 5.43055 9.70711 5.61809C9.89464 5.80563 10 6.05998 10 6.3252V18.3252C10 18.5904 9.89464 18.8448 9.70711 19.0323C9.51957 19.2198 9.26522 19.3252 9 19.3252H7C6.73478 19.3252 6.48043 19.2198 6.29289 19.0323C6.10536 18.8448 6 18.5904 6 18.3252V6.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 6.3252C14 6.05998 14.1054 5.80563 14.2929 5.61809C14.4804 5.43055 14.7348 5.3252 15 5.3252H17C17.2652 5.3252 17.5196 5.43055 17.7071 5.61809C17.8946 5.80563 18 6.05998 18 6.3252V18.3252C18 18.5904 17.8946 18.8448 17.7071 19.0323C17.5196 19.2198 17.2652 19.3252 17 19.3252H15C14.7348 19.3252 14.4804 19.2198 14.2929 19.0323C14.1054 18.8448 14 18.5904 14 18.3252V6.3252Z"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="text-sm text-gray-500 mr-2"> auto </span>
                  </div>
                </div>
                <div class="flex justify-center gap-[16px] sm:mb-[-20px]">
                  <button
                    @click="openModal(car)"
                    class="flex items-center justify-center gap-1 h-[40px] bg-[#00ffff] rounded-[8px] px-4 text-sm font-semibold transition-all hover:bg-opacity-90 active:scale-95"
                    style="
                      box-shadow: 0px 0px 27.5px -1px rgba(0, 255, 255, 0.4);
                    "
                  >
                    Video
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 4.50004V20.5C5.99995 20.678 6.04737 20.8527 6.13738 21.0062C6.22739 21.1597 6.35672 21.2864 6.51202 21.3732C6.66733 21.46 6.84299 21.5038 7.02088 21.5001C7.19878 21.4964 7.37245 21.4453 7.524 21.352L20.524 13.352C20.6696 13.2626 20.7898 13.1373 20.8733 12.9881C20.9567 12.839 21.0005 12.6709 21.0005 12.5C21.0005 12.3291 20.9567 12.1611 20.8733 12.012C20.7898 11.8628 20.6696 11.7375 20.524 11.648L7.524 3.64804C7.37245 3.5548 7.19878 3.50369 7.02088 3.49997C6.84299 3.49626 6.66733 3.54007 6.51202 3.6269C6.35672 3.71372 6.22739 3.84042 6.13738 3.9939C6.04737 4.14739 5.99995 4.32211 6 4.50004Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-center gap-1 h-[40px] bg-[#F1BC00] rounded-[8px] px-4 text-white text-sm font-semibold transition-all hover:bg-opacity-90 active:scale-95"
                    style="
                      box-shadow: 0px 0px 27.5px -1px rgba(0, 255, 255, 0.4);
                    "
                    @click="goToDetailPage(i)"
                  >
                    Barafsil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <base-modal :value="modal" @close="modal = false">
      <iframe
        width="100%"
        height="100%"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        :src="'https://www.youtube.com/embed/' + activeVideo"
      >
      </iframe>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "../../components/shared-components/BaseModal.vue";
import MainLoading from "../../components/shared-components/MainLoading.vue";
export default {
  components: { BaseModal, MainLoading },
  name: "katalog",
  data() {
    return {
      category: [],
      categoryCarList: [],
      categoryId: null,
      modal: false,
      activeVideo: null,
      loading: false,
    };
  },
  methods: {
    goToDetailPage(carId) {
      this.$router.push(`/detailed/${carId}`);
    },
    getCategoryList() {
      this.$axios
        .$get("categories/")
        .then((response) => {
          this.category = response;
          if (response.length > 0) {
            this.categoryId = response[0].id;
            this.getCategoryCarList();
          }
        })
        .catch((error) => {
          console.error("Malumotlarni olishda xato yuz berdi:", error);
        })
        .finally(() => {});
    },
    getCategoryCarList() {
      this.loading = true;
      this.$axios
        .$get(`cars/${this.categoryId}/`)
        .then((response) => {
          this.categoryCarList = response;
        })
        .catch((error) => {
          console.error("Malumotlarni olishda xato yuz berdi:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    selectedCategoryId(id) {
      this.categoryId = id;
      this.getCategoryCarList();
    },
    openModal(car) {
      this.modal = true;
      this.activeVideo = car.video_link;
    },
  },
  watch: {
    categoryId() {},
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style lang="scss" scoped>
.card-hover {
  border-radius: 4px;
  background: #fff;
  transition: all 0.3s;
  box-shadow: 0px 0px 5px 0px rgba(0, 255, 255, 0.8);
  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 255, 255, 0.8);
    transform: translateY(-10px);
  }
}
</style>
