<template>
  <div class="py-10">
    <div class="container">
      <titile-base-component :title="$t('text.text2')" />

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
      ref="mySwiperVideo"
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
        v-for="item in carsList"
        :key="item.id"
      >
        <div
          class="h-[300px] lg:h-[380px] relative group cursor-pointer bg-white oveflow-hidden"
          @click="openModal(item.video_link)"
        >
          <div
            class="absolute top-0 left-0 w-full h-full group-hover:lg:h-[250px] group-hover:h-[180px] transition-all duration-400 cursor-pointer"
          >
            <div
              class="absolute w-full h-full bg-[#05141fa3] flex items-center justify-center group"
              style="z-index: 1"
            >
              <div
                class="w-[104px] h-[104px] border border-white/10 rounded-full flex items-center justify-center group-hover:w-16 group-hover:h-16 group-hover:border-transparent transition-all duration-400"
              >
                <div
                  class="w-[84px] h-[84px] border border-white/40 rounded-full flex items-center justify-center group-hover:w-16 group-hover:h-16 group-hover:border-transparent transition-all duration-400"
                >
                  <div
                    class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full max-w-[36px] h-full"
                    >
                      <path
                        d="M6 4.00001V20C5.99995 20.1779 6.04737 20.3527 6.13738 20.5061C6.22739 20.6596 6.35672 20.7863 6.51202 20.8731C6.66733 20.96 6.84299 21.0038 7.02088 21.0001C7.19878 20.9964 7.37245 20.9452 7.524 20.852L20.524 12.852C20.6696 12.7625 20.7898 12.6372 20.8733 12.4881C20.9567 12.3389 21.0005 12.1709 21.0005 12C21.0005 11.8291 20.9567 11.6611 20.8733 11.5119C20.7898 11.3628 20.6696 11.2375 20.524 11.148L7.524 3.14801C7.37245 3.05477 7.19878 3.00366 7.02088 2.99994C6.84299 2.99623 6.66733 3.04004 6.51202 3.12687C6.35672 3.21369 6.22739 3.34038 6.13738 3.49387C6.04737 3.64736 5.99995 3.82208 6 4.00001Z"
                        fill="#4FF4F4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <img
              :src="item.images[0].image"
              alt="card"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <div
            class="w-full h-[114px] absolute bottom-[-100%] left-0 group-hover:bottom-0 transition-all px-5"
          >
            <p class="text-black text-sm font-semibold line-clamp-2">
              {{ item[$localeKey("description")] }}
            </p>
            <div class="flex items-center mt-3">
              <span class="mr-1">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 21.3252H6C5.46957 21.3252 4.96086 21.1145 4.58579 20.7394C4.21071 20.3643 4 19.8556 4 19.3252V7.3252C4 6.79476 4.21071 6.28605 4.58579 5.91098C4.96086 5.53591 5.46957 5.3252 6 5.3252H18C18.5304 5.3252 19.0391 5.53591 19.4142 5.91098C19.7893 6.28605 20 6.79476 20 7.3252V13.3252M16 3.3252V7.3252M8 3.3252V7.3252M4 11.3252H20M17 17.3252V22.3252M21 17.3252V22.3252"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-black text-sm font-semibold">
                {{ $moment(item.created_at).format("YYYY-MM-DD HH:ss") }}
              </span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <base-modal :value="isOpen" @close="isOpen = false">
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
import BaseModal from "../shared-components/BaseModal.vue";
import TitileBaseComponent from "../shared-components/TitileBaseComponent.vue";
export default {
  name: "video-swiper",
  components: { BaseModal, TitileBaseComponent },
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
            spaceBetween: 10,
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
      carsList: [],
      isOpen: false,
      activeVideo: null,
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
    prev() {
      if (this.$refs.mySwiperVideo && this.$refs.mySwiperVideo.swiper) {
        this.$refs.mySwiperVideo.swiper.slidePrev();
      }
    },
    next() {
      if (this.$refs.mySwiperVideo && this.$refs.mySwiperVideo.swiper) {
        this.$refs.mySwiperVideo.swiper.slideNext();
      }
    },
    openModal(url) {
      this.isOpen = true;
      this.activeVideo = url;
    },
  },
  computed: {},
  mounted() {
    this.getCarsList();
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
</style>
