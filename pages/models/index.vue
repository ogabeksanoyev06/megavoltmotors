<template>
  <div class="relative h-screen">
    <main-loading v-if="loading" />
    <div v-else>
      <div class="absolute w-full bottom-5 md:bottom-0 left-0 mb-11 z-[98]">
        <div class="w-full container">
          <transition name="silde-fide">
            <div
              class="flex items-center justify-center md:justify-start gap-5"
            >
              <div class="max-w-[110px] md:max-w-[160px] h-[56px] md:h-[78px]">
                <img
                  :src="activeList?.images[0].image"
                  alt="main-bg"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <div class="flex items-center gap-3">
                  <p
                    class="text-sm md:text-[32px] leading-5 md:leading-[45px] font-normal text-white"
                  >
                    {{ activeList?.name_uz }}
                  </p>
                </div>
                <p
                  class="leading-17 text-xs md:text-sm font-semibold text-[#00ffff] mt-1"
                >
                  <span>{{ activeList?.price }}</span> dan USD
                </p>
              </div>
            </div>
          </transition>
          <div class="flex justify-between items-center mt-6">
            <div
              class="flex items-center flex-col md:flex-row w-full md:w-auto gap-6"
            >
              <button
                @click="isModal = true"
                class="w-full md:w-auto justify-center md:justify-start rounded-[8px] py-3 px-8 bg-[#00ffff] bg-opacity-50 flex items-center gap-2 text-base leading-6 font-normal text-white transition-all hover:bg-opacity-20 active:scale-95"
              >
                Ariza qoldirish
              </button>
              <a
                :href="activeList?.instruction"
                target="_blank"
                class="w-full md:w-auto justify-center md:justify-start rounded-[8px] py-3 sm:px-8 bg-[#00ffff] bg-opacity-50 flex-center gap-2 text-base leading-6 font-normal text-white transition-all hover:bg-opacity-20 active:scale-95"
              >
                Barcha ma'lumotlarni yuklab olish
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden">
        <div class="wrapper h-screen">
          <div
            class="slide min-h-screen max-h-screen relative overflow-hidden"
            v-for="item in carsList"
            :key="item.id"
            :data-id="item.id"
          >
            <div class="absolute w-full h-full top-0 left-0">
              <img
                :src="item.images[0].image"
                class="w-full h-full object-cover"
                alt="main"
              />
            </div>
            <div class="bg-black-linear absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
      <div>
        <div
          class="navigation w-full overflow-y-auto min-h-[52px] scroll-mini absolute z-10 top-[90px] md:top-[100px]"
        >
          <div
            class="min-w-[700px] container flex items-center justify-start gap-[10px]"
          >
            <div
              class="text-white whitespace-nowrap py-2 px-4 rounded-[8px] hover-underline-animation text-base font-normal transition-all cursor-pointer hover:text-[#00ffff]"
              v-for="item in carsList"
              :key="item.id"
              :class="{ active: isActive === item.id }"
              @click="setActive(item)"
            >
              <div class="text-center">
                {{ item.name_uz }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <feedback-modal :value="isModal" @close="isModal = false" />
    </div>
  </div>
</template>

<script>
import FeedbackModal from "../../components/shared-components/Feedback-modal.vue";
import MainLoading from "../../components/shared-components/MainLoading.vue";
export default {
  name: "models",
  components: { FeedbackModal, MainLoading },
  data() {
    return {
      results: [
        {
          id: 7,
          name: "Sportage",
          cover_image:
            "https://kia-qarshi.uz/media/car_models/sportage_33wchIN.webp",
          image: "https://kia-qarshi.uz/media/car_models/Sportage.png",
          price: 389900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_Sportage.pdf",
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
          name: "K5",
          cover_image: "https://kia-qarshi.uz/media/car_models/k5.webp",
          image: "https://kia-qarshi.uz/media/car_models/K5.png",
          price: 339900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_K5.pdf",
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
          name: "Seltos",
          cover_image: "https://kia-qarshi.uz/media/car_models/original.webp",
          image: "https://kia-qarshi.uz/media/car_models/ooooooo.webp",
          price: 369900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_Seltos.pdf",
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
          name: "Sorento",
          cover_image: "https://kia-qarshi.uz/media/car_models/sorento.webp",
          image: "https://kia-qarshi.uz/media/car_models/Sorento.png",
          price: 534900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_Sorento.pdf",
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
          name: "Stinger",
          cover_image: "https://kia-qarshi.uz/media/car_models/stinger.webp",
          image: "https://kia-qarshi.uz/media/car_models/Stinger.png",
          price: 770900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_Stinger.pdf",
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
          name: "Bongo",
          cover_image: "https://kia-qarshi.uz/media/car_models/bongo.webp",
          image:
            "https://kia-qarshi.uz/media/car_models/bongo-fotor-bg-remover-20230510173437.webp",
          price: 264900000,
          info: "https://kia-qarshi.uz/media/car_docs/price_list_bongo.pdf",
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
          name: "Carnival",
          cover_image: "https://kia-qarshi.uz/media/car_models/Carnival.webp",
          image: "https://kia-qarshi.uz/media/car_models/carnival.png",
          price: 489900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_Carnival.pdf",
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
          name: "K8",
          cover_image: "https://kia-qarshi.uz/media/car_models/k8.webp",
          image: "https://kia-qarshi.uz/media/car_models/K8.png",
          price: 684900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prayss_K8.pdf",
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
          name: "Cerato",
          cover_image: "https://kia-qarshi.uz/media/car_models/cerato.webp",
          image: "https://kia-qarshi.uz/media/car_models/cerato3.png",
          price: 299900000,
          info: "https://kia-qarshi.uz/media/car_docs/cerato-12-01-2022.pdf",
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
          name: "EV6",
          cover_image: "https://kia-qarshi.uz/media/car_models/original_1.webp",
          image:
            "https://kia-qarshi.uz/media/car_models/1cb8fe990227cf624c63a401b91e231c.webp",
          price: 699900000,
          info: "https://kia-qarshi.uz/media/car_docs/Prays_EV6.pdf",
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
      isActive: null,
      activeList: null,
      carsList: [],
      isModal: false,
      loading: false,
    };
  },
  methods: {
    setActive(item) {
      this.isActive = item.id;
      this.activeList = item;
    },
    hideCategoryDropdown() {
      this.categoryDropdown = false;
    },
    getCarsList() {
      this.loading = true;
      this.$axios
        .$get("cars/list/?limit=1000")
        .then((response) => {
          this.carsList = response.results;
          this.setActive(response.results[0]);
        })
        .catch((error) => {
          console.error("Malumotlarni olishda xato yuz berdi:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    isActive(newValue) {
      this.$nextTick(() => {
        const element = this.$el.querySelector(`.slide[data-id="${newValue}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
  mounted() {
    this.getCarsList();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-y: repeat(100%);
  scroll-snap-destination: 0 0;
  align-items: stretch;
  bottom: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  left: 0;
  max-height: 100vh;
  max-width: 100vw;
  min-height: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  right: 0;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-snap-type: mandatory;
  top: 0;
}
.wrapper > * {
  flex: 1;
  min-height: 100%;
  scroll-snap-align: start;
}
.bg-black-linear {
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.8) 21.97%,
    rgba(30, 30, 30, 0) 54.17%,
    rgba(30, 30, 30, 0.8) 80.31%
  );
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
}
.hover-underline-animation.active {
  color: #00ffff;
}
.active.hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.hover-underline-animation:after {
  background-color: #262626;
  border-radius: 8px;
  bottom: 0px;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  width: 100%;
  z-index: -1;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.navigation::-webkit-scrollbar {
  height: 0;
  width: 0;
}
</style>
