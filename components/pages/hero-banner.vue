<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div
      class="bg-black-linear opacity-0 sm:opacity-100 absolute inset-0 w-full h-full z-[2]"
    />
    <div
      class="bg-black-linear-responsive sm:opacity-0 absolute inset-0 w-full h-full z-[2]"
    />
    <div class="relative h-full">
      <swiper
        ref="mySwiper"
        class="swiper h-full !pointer-events-none"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="(info, index) in results"
          :key="index"
          class="swiper-slide h-full"
        >
          <video
            muted="muted"
            autoplay="autoplay"
            loop="loop"
            playsinline=""
            class="w-full h-full object-cover"
          >
            <source :src="'/' + info.video" />
          </video>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-full absolute left-0 bottom-[50px] z-10">
      <div class="container">
        <div class="flex items-center justify-between">
          <button
            class="button-prev border border-white border-solid w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full transition-200 hover:bg-white group cursor-pointer"
            @click="prev()"
          >
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
                stroke="#fff"
                stroke-width="1.5"
              ></path>
            </svg>
          </button>

          <button
            class="button-next border border-white border-solid w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full transition-all hover:bg-white group cursor-pointer"
            @click="next()"
          >
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
                stroke="#fff"
                stroke-width="1.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-banner",
  components: {},
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: false,
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        speed: 1000,
      },
      results: [
        {
          id: 7,
          video: "video-hero.MOV",
        },
      ],
    };
  },
  methods: {
    prev() {
      if (this.$refs.mySwiper && this.$refs.mySwiper.swiper) {
        this.$refs.mySwiper.swiper.slidePrev();
      }
    },
    next() {
      if (this.$refs.mySwiper && this.$refs.mySwiper.swiper) {
        this.$refs.mySwiper.swiper.slideNext();
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.bg-black-linear {
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.8),
    rgba(30, 30, 30, 0) 54.17%,
    rgba(30, 30, 30, 0.8)
  );
}
.bg-black-linear-responsive {
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.9) 21.28%,
    rgba(30, 30, 30, 0) 54.17%,
    rgba(30, 30, 30, 0.9) 68.25%
  );
}
button:hover {
  svg {
    path {
      stroke: #000;
    }
  }
}
</style>
