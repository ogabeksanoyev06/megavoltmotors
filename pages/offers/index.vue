<template>
  <div class="py-[40px]">
    <main-loading v-if="loading" />
    <div class="container" v-else>
      <div class="flex flex-col mb-[40px]">
        <span class="text-white font-semibold text-2xl md:text-[50px]">
          Maxsus takliflar
        </span>
      </div>
      <div
        class="grid xl:grid-cols-4 xl:justify-between lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 max-w-full mb-[32px]"
      >
        <div
          class="card cursor-pointer rounded-[10px] transition-all duration-500 flex flex-col"
          v-for="(item, i) in offersList"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="(i + 1) * 100"
        >
          <div class="lg:h-[200px]">
            <img
              :src="item.images[0].image"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="content lg:min-h-[180px] relative z-[1] transition-all duration-500 flex flex-col gap-[10px] bg-[#f8f8f8] px-3 py-4"
          >
            <h3
              class="text-xl font-bold capitalize"
              @click="goToDetailPage(item.id)"
            >
              {{ item[$localeKey("name")] }}
            </h3>
            <span class="text-sm leading-snug mb-[15px]">
              {{ item[$localeKey("discount_description")] }}
            </span>
            <div class="flex items-center">
              <span class="mr-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.795 21.3252H5C4.46957 21.3252 3.96086 21.1145 3.58579 20.7394C3.21071 20.3643 3 19.8556 3 19.3252V7.3252C3 6.79476 3.21071 6.28605 3.58579 5.91098C3.96086 5.53591 4.46957 5.3252 5 5.3252H17C17.5304 5.3252 18.0391 5.53591 18.4142 5.91098C18.7893 6.28605 19 6.79476 19 7.3252V11.3252H3M15 3.3252V7.3252M7 3.3252V7.3252M18 16.8212V18.3252L19 19.3252M14 18.3252C14 19.3861 14.4214 20.4035 15.1716 21.1536C15.9217 21.9038 16.9391 22.3252 18 22.3252C19.0609 22.3252 20.0783 21.9038 20.8284 21.1536C21.5786 20.4035 22 19.3861 22 18.3252C22 17.2643 21.5786 16.2469 20.8284 15.4968C20.0783 14.7466 19.0609 14.3252 18 14.3252C16.9391 14.3252 15.9217 14.7466 15.1716 15.4968C14.4214 16.2469 14 17.2643 14 18.3252Z"
                    stroke="#F1BC00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="text-brand-orange text-sm">
                {{ $moment(item.created_at).format("YYYY-MM-DD HH:ss") }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainLoading from "../../components/shared-components/MainLoading.vue";
export default {
  components: { MainLoading },
  name: "offers",
  data() {
    return {
      offersList: [],
      loading: false,
    };
  },
  methods: {
    getOffersList() {
      this.loading = true;
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
        .finally(() => {
          this.loading = false;
        });
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
.card:hover {
  transform: translateY(-10px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .content {
    color: #fff !important;
    path {
      stroke: #fff;
    }
    span {
      color: #fff;
    }
  }
  .content::before {
    height: 100%;
    width: 100%;
  }
}
.content::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 0%;
  background-color: #f1bc00;
  z-index: -1;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
