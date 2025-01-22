<template>
  <div class="py-10 mt-20">
    <div class="container">
      <titile-base-component :title="$t('text.text5')" />
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(car, index) in carsList"
          :key="`slide-${index}`"
          class="swiper-slide p-5 rounded-[20px]"
          style="
            background: linear-gradient(
              180deg,
              #2c2c2c 0%,
              rgba(0, 255, 255, 0.78) 1891.69%
            );
          "
        >
          <div class="flex flex-col gap-[40px]">
            <div class="gap-8 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
              <div class="">
                <img
                  :src="car.images[0].image"
                  alt=""
                  class="w-full sm:h-[350px] rounded-[20px] object-cover"
                />
              </div>
              <div class="flex flex-col justify-between gap-5">
                <h3 class="text-xl text-white font-bold uppercase">
                  {{ car.name_uz }}
                </h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 flex-col gap-3">
                  <p class="text-sm leading-snug text-white">
                    Motor: {{ car.motor }}
                  </p>
                  <p class="text-sm font-normal leading-snug text-white">
                    Quvvat: {{ car.power }}
                  </p>
                  <p class="text-sm font-normal leading-snug text-white">
                    Tezlashish: {{ car.acceleration }}
                  </p>
                  <p class="text-sm font-normal leading-snug text-white">
                    Zamonaviy kamera: {{ car.camera }}
                  </p>
                  <p class="text-sm font-normal leading-snug text-white">
                    Faralar: {{ car.headlights }}
                  </p>
                  <p class="text-sm font-normal leading-snug text-white">
                    Ot kuchi: {{ car.horse }}
                  </p>
                  <p class="text-sm font-normal leading-snug text-white">
                    Masofa: {{ car.distance }}
                  </p>
                </div>
                <div class="flex flex-wrap gap-x-5 gap-y-1.5">
                  <button
                    @click="modal = true"
                    class="h-[40px] max-w-[200px] w-full bg-[#00ffff] border border-transparent px-4 text-sm transition-all hover:bg-opacity-90 active:scale-95"
                  >
                    {{ $t("text.a") }}
                  </button>
                  <button
                    @click="goToDetailPage(car.id)"
                    class="h-[40px] max-w-[200px] w-full bg-transparent border border-[#00ffff] px-4 text-sm text-white transition-all hover:bg-opacity-90 active:scale-95"
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div class="flex flex-wrap gap-5">
                <div class="flex items-baseline">
                  <p
                    class="text-[32px] sm:text-[38px] md:text-[50px] lg:text-[80px] font-bold text-white"
                  >
                    {{ car.motor }}
                  </p>
                  <p class="text-sm font-[400] text-white ml-2">Motor</p>
                </div>
                <div class="flex items-baseline">
                  <p
                    class="text-[32px] sm:text-[38px] md:text-[50px] lg:text-[80px] font-bold text-white"
                  >
                    {{ car.power }}
                  </p>
                  <p class="text-sm font-[400] text-white ml-2">Dvigatel</p>
                </div>
                <div class="flex items-baseline">
                  <p
                    class="text-[32px] sm:text-[38px] md:text-[50px] lg:text-[80px] font-bold text-white"
                  >
                    {{ car.camera }}
                  </p>
                  <p class="text-sm font-[400] text-white ml-2">Kamera</p>
                </div>
                <div class="flex items-baseline">
                  <p
                    class="text-[32px] sm:text-[38px] md:text-[50px] lg:text-[80px] font-bold text-white"
                  >
                    {{ car.horse }}
                  </p>
                  <p class="text-sm font-[400] text-white ml-2">Tezlik</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <feedback-modal :value="modal" @close="modal = false" />
  </div>
</template>

<script>
import FeedbackModal from "../shared-components/Feedback-modal.vue";
import TitileBaseComponent from "../shared-components/TitileBaseComponent.vue";
export default {
  name: "car-swiper",
  components: { FeedbackModal, TitileBaseComponent },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        speed: 1000,
      },
      modal: false,
      carsList: [],
      slideCounter: 0,
    };
  },
  methods: {
    getCarsList() {
      this.$axios
        .$get("cars/list/?limit=1000")
        .then((response) => {
          this.carsList = response.results;
        })
        .catch((error) => {
          console.error("Malumotlarni olishda xato yuz berdi:", error);
        })
        .finally(() => {});
    },
    goToDetailPage(carId) {
      this.$router.push(`/detailed/${carId}`);
    },
  },
  mounted() {
    this.getCarsList();
  },
};
</script>

<style lang="scss" scoped></style>
