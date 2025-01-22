<template>
  <div class="py-[40px]">
    <main-loading v-if="loading" />
    <div class="container">
      <div
        class="flex flex-col gap-y-8 lg:gap-x-10 lg:flex-row items-start mb-10"
      >
        <div class="lg:flex-1 flex max-w-[500px] w-full">
          <swiper class="swiper w-full" :options="swiperOptions">
            <swiper-slide
              class="swiper-slide w-full"
              v-for="(image, i) in images"
              :key="i"
            >
              <img
                :src="'https://api.megavoltmotors.uz' + image.image"
                alt="Image"
                class="w-full h-full object-cover"
              />
            </swiper-slide>
          </swiper>
        </div>

        <div class="flex flex-col gap-5 lg:flex-1">
          <p class="text-2xl font-bold text-white uppurcase">
            {{ car.category?.name }}
          </p>
          <div class="flex flex-col gap-2">
            <span class="text-sm sm:text-base text-white mb-[20px]">
              {{ car.description_uz }}
            </span>
            <div class="flex flex-col gap-3 mb-[20px]" v-if="car.is_discount">
              <p class="text-2xl font-bold text-white uppurcase">
                Maxsus taklif
              </p>
              <p class="text-sm sm:text-base text-white">
                {{ car[$localeKey("discount_description")] }}
              </p>
              <p class="text-sm sm:text-base text-white">
                Chegirma narxi:
                <span class="text-[#4FF4F4] ml-1">{{ car.price }}</span>
              </p>
            </div>
            <div class="grid sm:grid-cols-2 gap-3">
              <span class="text-sm sm:text-base text-white">
                Dvigatel quvvati:
                <span class="text-[#4FF4F4] ml-1">200 kVt (272 ot kuchi)</span>
              </span>
              <span class="text-sm sm:text-base text-white">
                Ot kuchi:
                <span class="text-[#4FF4F4] ml-1">{{ car.horse }}</span>
              </span>
              <span class="text-sm sm:text-base text-white">
                Zamonaviy kamera:
                <span class="text-[#4FF4F4] ml-1">{{ car.camera }}</span>
              </span>
              <span class="text-sm sm:text-base text-white">
                Motor:
                <span class="text-[#4FF4F4] ml-1">{{ car.motor }}</span>
              </span>
              <span class="text-sm sm:text-base text-white">
                Zamonaviy faralar:
                <span class="text-[#4FF4F4] ml-1">{{ car.headlights }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-10 sm:gap-[50px]">
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white">{{ car.motor }}</span>
          <span class="text-sm font-semibold text-white">Motor</span>
        </div>
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white">{{ car.power }}</span>
          <span class="text-sm font-semibold text-white">Quvvat</span>
        </div>
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white"
            >{{ car.acceleration }}
          </span>
          <span class="text-sm font-semibold text-white">Tezlashish</span>
        </div>
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white">{{ car.camera }}</span>
          <span class="text-sm font-semibold text-white">Kamera</span>
        </div>
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white">{{ car.horse }}</span>
          <span class="text-sm font-semibold text-white">Ot kuchi</span>
        </div>
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white">{{
            car.headlights
          }}</span>
          <span class="text-sm font-semibold text-white">Faralar</span>
        </div>
        <div
          class="w-[120px] h-[120px] flex flex-col items-center justify-center border border-[#4FF4F4] border-[2px] rounded-[100%]"
        >
          <span class="text-base font-bold text-white">{{ car.horse }}</span>
          <span class="text-sm font-semibold text-white">Horse</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainLoading from "../../components/shared-components/MainLoading.vue";
export default {
  components: { MainLoading },
  name: "DetailedView",
  data() {
    return {
      results: [
        {
          id: 7,
          cover_image:
            "https://kia-qarshi.uz/media/car_models/sportage_33wchIN.webp",
          image: "https://kia-qarshi.uz/media/car_models/Sportage.png",
          name: "Sportage",
          price: 389900000,
          power: 190,
          motor: "2.5",
          acceleration: "9.4",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/e5/08/e50870e6340b3593833df7916a2b5956.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/07/e5/07e5634accf7cc928b00b1557d3abf72.webp",
            small:
              "https://kia-qarshi.uz/media/cache/44/09/44090099c70ec7c41e9ebb35f7e53965.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/ed/4e/ed4e76313bbfb2bf7b07d80489f3ea91.png",
            medium:
              "https://kia-qarshi.uz/media/cache/7d/87/7d875765d8b737b95bdffc387f8d0be2.png",
            small:
              "https://kia-qarshi.uz/media/cache/3e/3b/3e3b402a32b7cb68bed9b9332c13becc.png",
          },
        },
        {
          id: 8,
          cover_image: "https://kia-qarshi.uz/media/car_models/k5.webp",
          image: "https://kia-qarshi.uz/media/car_models/K5.png",
          name: "K5",
          price: 339900000,
          power: 194,
          motor: "2.5",
          acceleration: "10.6",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/21/bb/21bbeb19c63c284fdc3f06401ed8f6a4.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/d4/94/d4943fbfd99bc927189cb8e02eb11e23.webp",
            small:
              "https://kia-qarshi.uz/media/cache/8d/20/8d209cba0696e5b878d560b54648a94b.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/d0/47/d047162d09266f17e0a9928ec0e73ead.png",
            medium:
              "https://kia-qarshi.uz/media/cache/9f/8d/9f8d5228ff6f119358cbc497db928a6c.png",
            small:
              "https://kia-qarshi.uz/media/cache/23/87/23873fc7187c01b7c0d2a45b2b4ef9de.png",
          },
        },
        {
          id: 10,
          cover_image: "https://kia-qarshi.uz/media/car_models/original.webp",
          image: "https://kia-qarshi.uz/media/car_models/ooooooo.webp",
          name: "Seltos",
          price: 369900000,
          power: 147,
          motor: "2.0",
          acceleration: "9.6",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/24/45/2445917bf9207ac7bd76138010f1bccd.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/a2/3c/a23cfe24ea2a478c851ec60310649d04.webp",
            small:
              "https://kia-qarshi.uz/media/cache/a2/b2/a2b246e402a4ea61065a132c1bb27619.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/9c/e8/9ce870c49214598d44209f109cc973ee.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/34/dd/34ddb3bae778b430b00f9e34d6294b39.webp",
            small:
              "https://kia-qarshi.uz/media/cache/e9/2d/e92d92b8cb99500097c466de9f6ffa76.webp",
          },
        },
        {
          id: 11,
          cover_image: "https://kia-qarshi.uz/media/car_models/sorento.webp",
          image: "https://kia-qarshi.uz/media/car_models/Sorento.png",
          name: "Sorento",
          price: 534900000,
          power: 249,
          motor: "3.5",
          acceleration: "9.4",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/c9/b1/c9b1bbe7cf082c8c2a9ba22bf49ffede.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/f5/12/f51236ddba28c096146c74e91c6ff8eb.webp",
            small:
              "https://kia-qarshi.uz/media/cache/26/13/261379c778d29a8d2e25e6b03017f237.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/91/8e/918eaf8c58a57c5e1afe622ddf175f2a.png",
            medium:
              "https://kia-qarshi.uz/media/cache/1c/5a/1c5a0f5e6744300a2dd82c877db0efc4.png",
            small:
              "https://kia-qarshi.uz/media/cache/c7/49/c749c42c64dfb9361b414412f1ea77d7.png",
          },
        },
        {
          id: 9,
          cover_image: "https://kia-qarshi.uz/media/car_models/stinger.webp",
          image: "https://kia-qarshi.uz/media/car_models/Stinger.png",
          name: "Stinger",
          price: 770900000,
          power: 370,
          motor: "3.3",
          acceleration: "4.9",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/29/e6/29e63077bd0e48cce50466ddf02ef355.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/95/f5/95f56ec626134580834fb7a178f956fa.webp",
            small:
              "https://kia-qarshi.uz/media/cache/72/8e/728e5bc127316f7891543023d35dbac4.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/f7/b0/f7b06333b253fc8c77bf80cd2e52037f.png",
            medium:
              "https://kia-qarshi.uz/media/cache/08/74/08744a1d16c89b8468492fd53cbd745d.png",
            small:
              "https://kia-qarshi.uz/media/cache/ff/d4/ffd48729276ff1d026a46491a506f981.png",
          },
        },
        {
          id: 12,
          cover_image: "https://kia-qarshi.uz/media/car_models/bongo.webp",
          image:
            "https://kia-qarshi.uz/media/car_models/bongo-fotor-bg-remover-20230510173437.webp",
          name: "Bongo",
          price: 264900000,
          power: 80,
          motor: "2.7",
          acceleration: "45.2",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/17/86/17861012b1e858e8022bda070ab4d726.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/52/6b/526ba484a273fc1aab4c09a45bb1d22e.webp",
            small:
              "https://kia-qarshi.uz/media/cache/65/03/6503129ab3d69d949989b3d95b7faef6.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/9e/93/9e938863fd82ec0cb79dab6eaefe8cdb.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/fe/eb/feeb483c05d645ba6a276c918bcd4ccc.webp",
            small:
              "https://kia-qarshi.uz/media/cache/64/54/645459bfd16d8f7c554c2829cadf0152.webp",
          },
        },
        {
          id: 13,
          cover_image: "https://kia-qarshi.uz/media/car_models/Carnival.webp",
          image: "https://kia-qarshi.uz/media/car_models/carnival.png",
          name: "Carnival",
          price: 489900000,
          power: 272,
          motor: "3.5",
          acceleration: "8.5",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/16/2a/162a4b9beb315c9573afc72a70f04bc8.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/1f/4a/1f4a54c8a04ece5740e446fdc780da82.webp",
            small:
              "https://kia-qarshi.uz/media/cache/d0/c3/d0c3f900574fe83c6ed31a6215c65fad.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/db/5b/db5be9acf2911788c42add8d2accdab8.png",
            medium:
              "https://kia-qarshi.uz/media/cache/d0/ef/d0ef610f3280de3213bde72b5b6a4365.png",
            small:
              "https://kia-qarshi.uz/media/cache/45/5c/455c739dc125633050f90ec72fc9a6b3.png",
          },
        },
        {
          id: 14,
          cover_image: "https://kia-qarshi.uz/media/car_models/k8.webp",
          image: "https://kia-qarshi.uz/media/car_models/K8.png",
          name: "K8",
          price: 684900000,
          power: 300,
          motor: "3.5",
          acceleration: "6.9",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/57/75/577582e6b94666bce45f0a3df652e7b2.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/ac/95/ac958d6dd10c82829981abdaf1b827a8.webp",
            small:
              "https://kia-qarshi.uz/media/cache/e1/30/e1303bf1cfe483c89e38572b856ae6e2.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/f0/ad/f0ad6b0b990e9f5b5976a14e053ae379.png",
            medium:
              "https://kia-qarshi.uz/media/cache/6a/3a/6a3aba26ef969385bb9f024b41f76b97.png",
            small:
              "https://kia-qarshi.uz/media/cache/13/ae/13aefa0ad81f263bf5dd1edc8076394e.png",
          },
        },
        {
          id: 15,
          cover_image: "https://kia-qarshi.uz/media/car_models/cerato.webp",
          image: "https://kia-qarshi.uz/media/car_models/cerato3.png",
          name: "Cerato",
          price: 299900000,
          power: 152,
          motor: "2.0",
          acceleration: "9.8",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/70/12/7012d40f3b651b853f4b041b49f31b9e.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/3f/4f/3f4f56ae0dc0df5ed7f409aa1957a8d2.webp",
            small:
              "https://kia-qarshi.uz/media/cache/88/26/88261c80e9d41cfff8033266d4011713.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/6f/ee/6feecd7f4929d1042ba162a223fc604d.png",
            medium:
              "https://kia-qarshi.uz/media/cache/30/ab/30ab8c625aed5ff9f85a0744e4d93b25.png",
            small:
              "https://kia-qarshi.uz/media/cache/78/b9/78b95edb4d86d80360ca0cc8d4e3fe47.png",
          },
        },
        {
          id: 16,
          cover_image: "https://kia-qarshi.uz/media/car_models/original_1.webp",
          image:
            "https://kia-qarshi.uz/media/car_models/1cb8fe990227cf624c63a401b91e231c.webp",
          name: "EV6",
          price: 699900000,
          power: 225,
          motor: "1.0",
          acceleration: "8.5",
          thumbnail_cover_image: {
            large:
              "https://kia-qarshi.uz/media/cache/22/7f/227f7c0d629bc187863cecff68db7d8c.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/6b/3d/6b3d0a529b1eca6937a1f7adfa5b6fda.webp",
            small:
              "https://kia-qarshi.uz/media/cache/00/d7/00d79e6adddbc9d056efdc9bed085d49.webp",
          },
          thumbnail_image: {
            large:
              "https://kia-qarshi.uz/media/cache/53/80/53802e431bd0712a1143fc6318ccf9e9.webp",
            medium:
              "https://kia-qarshi.uz/media/cache/b4/ba/b4baa285a6d85f0eb348b5578c834ef6.webp",
            small:
              "https://kia-qarshi.uz/media/cache/02/d3/02d3885b7d5555c99af49f245701833e.webp",
          },
        },
      ],
      swiperOptions: {
        loop: true,

        effect: "cube",
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        slidesPerView: 1,
        speed: 1000,
      },
      carId: null,
      car: [],
      images: [],
      loading: false,
    };
  },
  methods: {
    getCategoryCar() {
      this.loading = true;
      this.$axios
        .$get(`car/${this.carId}/`)
        .then((response) => {
          this.car = response[0];
          this.images = this.car.images;
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
    this.getCategoryCar();
  },
  created() {
    this.carId = this.$route.params.id;
  },
};
</script>

<style scoped>
.gallery-swiper .swiper-slide {
  height: 300px;
  background-position: center;
  background-size: cover;
}

.thumbs-swiper .swiper-slide {
  height: 100px;
  opacity: 0.4;
}

.thumbs-swiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
