<template>
  <div class="py-10">
    <div class="container">
      <titile-base-component :title="$t('text.text1')" />

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          class="swiper-slide"
          v-for="item in partners"
          :key="item.id"
        >
          <div
            class="h-[140px] w-[140px] rounded-[100%] overflow-hidden flex items-center justify-center p-3 mx-auto"
            style="box-shadow: 0 0 0 2px #fff"
          >
            <img class="object-contain" :src="item.photo" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import TitileBaseComponent from "../shared-components/TitileBaseComponent.vue";
export default {
  name: "partners",
  components: { TitileBaseComponent },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        slideToClickedSlide: false,
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            slidesPerView: 7,
            spaceBetween: 6,
          },
          991: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          573: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        spaceBetween: 20,
      },
      partners: [],
    };
  },
  methods: {
    getPartners() {
      this.$axios
        .$get("partner/")
        .then((response) => {
          this.partners = response;
        })
        .catch((error) => {
          console.error("Malumotlarni olishda xato yuz berdi:", error);
        })
        .finally(() => {});
    },
  },
  mounted() {
    this.getPartners();
  },
};
</script>

<style lang="scss" scoped></style>
