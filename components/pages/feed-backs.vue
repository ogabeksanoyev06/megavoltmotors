<template>
  <div
    class="py-10"
    style="
      background: linear-gradient(
        180deg,
        #2c2c2c 0%,
        rgba(0, 255, 255, 0.78) 1891.69%
      );
    "
  >
    <div class="container">
      <titile-base-component :title="$t('text.text4')" />
      <div
        class="flex flex-col items-center gap-y-8 lg:gap-x-10 lg:flex-row lg:items-start"
      >
        <div class="w-full lg:w-1/2 relative">
          <img
            src="/images/photo.png"
            alt=""
            class="w-full h-full object-cover"
          />
          <div
            style="
              background: linear-gradient(
                270deg,
                #000 0%,
                rgba(0, 0, 0, 0) 45.64%
              );
            "
            class="absolute top-0 right-0 w-full h-full"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(sendMessage)">
              <ValidationProvider
                v-slot="{ errors }"
                name="FISH"
                rules="required"
              >
                <div class="mb-4">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-white">
                      FISH
                    </label>
                    <div
                      class="inline-flex rounded-[8px] items-center transition-all relative overflow-hidden w-full h-[50px] flex items-center"
                      style="background: rgba(255, 255, 255, 0.09)"
                    >
                      <input
                        v-model="user.full_name"
                        name="Phone"
                        type="text"
                        placeholder="FISH ni kiritng"
                        class="pl-2 text-white !bg-transparent text-sm placeholder:!text-sm leading-18 font-medium !text-base md:!text-sm text-dark placeholder:text-base flex-grow pr-3 outline-none w-full h-full"
                        style="background: rgba(255, 255, 255, 0.3)"
                      />
                    </div>
                  </div>
                  <span
                    v-if="errors[0]"
                    class="text-sm font-semibold text-[#FF0000]"
                  >
                    {{ errors[0] }}
                  </span>
                </div>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Telefon raqam"
                rules="required|min:9"
              >
                <div class="mb-4">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-white">
                      Telefon raqam
                    </label>
                    <div
                      class="inline-flex rounded-[8px] items-center transition-all relative overflow-hidden w-full h-[50px] flex items-center"
                      style="background: rgba(255, 255, 255, 0.09)"
                    >
                      <span class="h-[50px] flex items-center">
                        <span class="pl-4 text-sm">+998</span>
                      </span>
                      <input
                        v-model="user.phone_number"
                        name="Phone"
                        type="text"
                        placeholder="00 000-00-00"
                        v-mask="'#########'"
                        class="pl-2 text-white !bg-transparent text-sm placeholder:!text-sm leading-18 font-medium !text-base md:!text-sm text-dark placeholder:text-base flex-grow pr-3 outline-none w-full h-full"
                        style="background: rgba(255, 255, 255, 0.3)"
                      />
                    </div>
                  </div>
                  <span
                    v-if="errors[0]"
                    class="text-sm font-semibold text-[#FF0000]"
                  >
                    {{ errors[0] }}
                  </span>
                </div>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="Murojaat matni"
                rules="required"
              >
                <div class="mb-4">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-white">
                      Murojaat matni
                    </label>
                    <div
                      class="inline-flex rounded-[8px] items-center transition-all relative overflow-hidden w-full flex items-center"
                      style="background: rgba(255, 255, 255, 0.09)"
                    >
                      <textarea
                        v-model="user.comment"
                        name="dsddsd"
                        placeholder="Murojat matnini yozing"
                        class="pl-2 pt-2 text-white !bg-transparent text-sm placeholder:!text-sm leading-18 font-medium !text-base md:!text-sm text-dark placeholder:text-base flex-grow pr-3 outline-none w-full h-full"
                        style="background: rgba(255, 255, 255, 0.3)"
                        rows="6"
                        cols="50"
                      />
                    </div>
                  </div>
                  <span
                    v-if="errors[0]"
                    class="text-sm font-semibold text-[#FF0000]"
                  >
                    {{ errors[0] }}
                  </span>
                </div>
              </ValidationProvider>
              <div>
                <button
                  type="submit"
                  class="mt-3 w-full md:w-auto justify-center md:justify-start rounded-[8px] py-3 sm:px-8 bg-[#00ffff] bg-opacity-50 flex-center gap-2 text-base leading-6 font-normal text-white transition-all hover:bg-opacity-20 active:scale-95"
                >
                  {{ $t("text.send") }}
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitileBaseComponent from "../shared-components/TitileBaseComponent.vue";
export default {
  components: { TitileBaseComponent },
  name: "feed-backs",
  data() {
    return {
      user: {
        phone_number: "",
        full_name: "",
        comment: "",
      },
      loading: false,
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .$post("feedback/", {
          full_name: this.user.full_name,
          phone_number: this.user.phone_number,
          comment: this.user.comment,
        })
        .then((response) => {
          if (response.status) {
            this.$snotify.success(response.message);
          }
        })
        .catch((error) => {
          this.$snotify.error(error.response.data.phone_number);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
