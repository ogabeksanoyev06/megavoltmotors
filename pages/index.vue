<template>
  <div>
    <hero-banner />
    <car-swiper />
    <marquee scrollamount="1" class="bg-[#1A1A1A] py-[11px]">
      <div class="marquee-content w-full flex justify-around gap-[20px]">
        <div
          class="font-normal whitespace-no-wrap text-[11px] text-white leading-[13px] opacity-60 flex-shrink-0"
          v-for="item in 20"
          :key="item"
        >
          <div class="flex items-center gap-[10px]">
            Qulay narxlar va kredit imkoniyatlari
            <img src="/svg/logo.svg" alt="" class="w-[80px]" />
            Avtomobil yonida yangi texnologiyalar haqida ma'lumot oling
          </div>
        </div>
      </div>
    </marquee>
    <partners />
    <video-reviews />
    <offers />
    <feed-backs />
  </div>
</template>
<script>
import HeroBanner from "../components/pages/hero-banner.vue";
import FeedBacks from "../components/pages/feed-backs.vue";
import CarSwiper from "../components/pages/car-swiper.vue";
import Offers from "../components/pages/offers.vue";
import Partners from "../components/pages/partners.vue";
import VideoReviews from "../components/pages/video-reviews.vue";
export default {
  components: {
    HeroBanner,
    FeedBacks,
    CarSwiper,
    Offers,
    Partners,
    VideoReviews,
  },
  name: "IndexPage",
  data() {
    return {};
  },
};
</script>
