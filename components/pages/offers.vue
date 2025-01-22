<template>
  <div class="py-10">
    <div class="container">
      <titile-base-component :title="$t('text.text3')" />
      <div class="lg:flex hidden justify-end gap-5 mb-5 inset-x-0 z-[999]">
        <div class="button-prev btn" @click="prev()">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            class=""
          >
            <path
              d="M6 3L2 7l4 4M2.333 7h12.334"
              stroke="#262626"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
        <div class="button-next btn" @click="next()">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            class=""
          >
            <path
              d="M9 11l4-4-4-4M12.667 7H.333"
              stroke="#262626"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <swiper
      ref="mySwiperOffers"
      class="swiper"
      :options="swiperOption"
      style="
        background: linear-gradient(
          180deg,
          #2c2c2c 0%,
          rgba(0, 255, 255, 0.78) 1891.69%
        );
      "
    >
      <swiper-slide
        class="swiper-slide"
        v-for="item in offersList"
        :key="item.id"
      >
        <div
          @click="goToDetailPage(item.id)"
          class="card cursor-pointer transition-all duration-500 relative block min-h-[250px] lg:min-h-[284px]"
        >
          <div class="card-backdrop"></div>
          <img
            :src="item.images[0].image"
            class="absolute -z-10 w-full h-full -z-10 pointer-events-none object-cover"
          />
          <div
            class="relative flex flex-col justify-between h-[242px] lg:h-[284px] p-5"
          >
            <div class="py-[13px] px-[7px] pointer-events-none">
              <img
                src="/svg/logo.svg"
                class="w-[66px] h-[28px] pointer-events-none"
              />
            </div>
            <div class="">
              <div class="mb-3">
                <p
                  class="text-white text-base font-normal leading-130 mb-3 line-clamp-3"
                >
                  {{ item[$localeKey("discount_description")] }}
                </p>
              </div>
              <div>
                <div class="flex items-center">
                  <span class="icon-calendar text-xl mr-2">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 21.3252H6C5.46957 21.3252 4.96086 21.1145 4.58579 20.7394C4.21071 20.3643 4 19.8556 4 19.3252V7.3252C4 6.79476 4.21071 6.28605 4.58579 5.91098C4.96086 5.53591 5.46957 5.3252 6 5.3252H18C18.5304 5.3252 19.0391 5.53591 19.4142 5.91098C19.7893 6.28605 20 6.79476 20 7.3252V13.3252M16 3.3252V7.3252M8 3.3252V7.3252M4 11.3252H20M17 17.3252V22.3252M21 17.3252V22.3252"
                        stroke="#354052"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span class="text-[#fff] text-sm opacity-60">
                    {{
                      $moment(item.created_at).format("YYYY-MM-DD HH:ss")
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import TitileBaseComponent from "../shared-components/TitileBaseComponent.vue";
export default {
  name: "offers",
  components: { TitileBaseComponent },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        slideToClickedSlide: false,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 6,
          },
          991: {
            slidesPerView: 4,
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
          376: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        spaceBetween: 20,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      },
      offersList: [],
    };
  },
  methods: {
    prev() {
      if (this.$refs.mySwiperOffers && this.$refs.mySwiperOffers.swiper) {
        this.$refs.mySwiperOffers.swiper.slidePrev();
      }
    },
    next() {
      if (this.$refs.mySwiperOffers && this.$refs.mySwiperOffers.swiper) {
        this.$refs.mySwiperOffers.swiper.slideNext();
      }
    },
    getOffersList() {
      this.$axios
        .$get("cars/list/?limit=1000")
        .then((response) => {
          this.offersList = response.results.filter(
            (offer) => offer.is_discount
          );
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
    this.getOffersList();
  },
};
</script>

<style lang="scss" scoped>
.button-prev,
.button-next {
  background-color: #00ffff;
  box-shadow: 0px 0px 27.5px -1px rgba(0, 255, 255, 0.4);
  padding: 15px;
  border-radius: 100%;
  cursor: pointer;
}
.card-backdrop:before {
  background: linear-gradient(180deg, rgba(5, 20, 31, 0), #000);
  opacity: 1;
}
.card-backdrop:after,
.card-backdrop:before {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.card-backdrop:after {
  background: linear-gradient(180deg, rgba(5, 20, 31, 0), #000 61.34%);
  opacity: 0;
}
.card {
  box-shadow: 0 0 20px 8px #0000001a;
}
.card:hover {
  .card-backdrop:after {
    opacity: 1;
  }
}
</style>
