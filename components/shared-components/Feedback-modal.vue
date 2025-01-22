<template>
  <transition name="fade" v-if="value">
    <div class="modal fixed top-0 w-auto h-auto z-[1000]">
      <div
        class="modal__backdrop bg-[#000000b3] w-full h-screen w-screen flex justify-center items-center px-4"
      >
        <div class="modal__container bg-white">
          <div class="relative sm:w-[582px] w-full">
            <div
              class="contact-modal-head sm:px-7 sm:py-7 py-4 px-4 flex justify-between items-center"
            >
              <h6 class="sm:text-[28px] text-xl font-normal leading-36">
                Biz bilan bog'lanish
              </h6>
              <button class="contact-modal__close" @click="close">
                <svg
                  width="32"
                  height="32"
                  class=""
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 8L8 24"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8L24 24"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="sm:px-7 sm:py-7 py-5 px-4">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(sendMessage)">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="FISH"
                    rules="required"
                  >
                    <div class="flex flex-col gap-2 w-full gap-3 mb-5">
                      <div class="flex-center-between w-full">
                        <label
                          class="text-sm font-semibold text-[#00ffff] text-sm font-normal"
                        >
                          Ism
                        </label>
                      </div>
                      <div
                        class="inline-flex items-center transition-all relative border border-gray-lightest bg-white overflow-hidden w-full h-11 !bg-[#eee] border-gray-thin focus-within:!border-[#00FFFF] hover:!border-[#00FFFF] px-4"
                      >
                        <span class="py-2.5 flex items-center bg-transparent">
                        </span>
                        <input
                          v-model="user.full_name"
                          type="text"
                          maxlength="99"
                          placeholder="Ismingizni kiriting"
                          class="!bg-transparent text-sm leading-18 placeholder:text-sm font-medium !text-base md:!text-sm text-dark placeholder:text-gray-light placeholder:text-base flex-grow py-2.5 pr-3 outline-none w-full"
                        />
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
                    <div class="flex flex-col gap-2 w-full gap-3 mb-5">
                      <div class="flex-center-between w-full">
                        <label
                          class="text-sm font-semibold text-[#00ffff] text-sm font-normal"
                        >
                          Telefon raqamingiz
                        </label>
                      </div>
                      <div
                        class="inline-flex items-center transition-all relative border border-gray-lightest bg-white overflow-hidden w-full h-11 !bg-[#EEE] border-gray-thin focus-within:border-[#00FFFF] hover:!border-[#00FFFF] flex items-center"
                      >
                        <span class="py-2.5 flex items-center bg-transparent">
                          <span class="pl-4 bg-[#EEE] text-sm">+998</span>
                        </span>
                        <input
                          v-model="user.phone_number"
                          type="text"
                          maxlength="99"
                          placeholder="00 000-00-00"
                          id="phone"
                          class="pl-1 !bg-transparent text-sm placeholder:!text-sm leading-18 font-medium !text-base md:!text-sm text-dark placeholder:text-gray-light placeholder:text-base flex-grow py-2.5 pr-3 outline-none w-full"
                          v-mask="'#########'"
                        />
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
                    <div class="flex flex-col gap-2 w-full gap-3 mb-8">
                      <div class="flex-center-between w-full">
                        <label
                          class="text-sm font-semibold text-[#00ffff] text-sm font-normal"
                        >
                          Murojaat matni
                        </label>
                      </div>
                      <div
                        class="inline-flex items-center border transition-all border-gray-lightest relative bg-transparent overflow-hidden w-full h-full !border-gray-thin focus-within:!border-[#00FFFF] hover:!border-[#00FFFF] cursor-pointer"
                      >
                        <textarea
                          v-model="user.comment"
                          type="text"
                          maxlength="1000"
                          placeholder="Qisqacha yozing"
                          id="text"
                          class="font-medium !text-base md:!text-sm text-dark transition-all placeholder:text-gray-200 bg-transparent flex-grow py-2.5 px-3 outline-none resize-none !bg-[#EEE] text-dark placeholder:!text-[#A2ABBE] min-h-[132px] py-[13px] px-4 text-sm w-full"
                        />
                      </div>
                      <span
                        v-if="errors[0]"
                        class="text-sm font-semibold text-[#FF0000]"
                      >
                        {{ errors[0] }}
                      </span>
                    </div>
                  </ValidationProvider>
                  <button
                    type="submit"
                    class="w-full flex items-center justify-center gap-1 h-[50px] bg-[#00ffff] rounded-[8px] px-4 text-sm font-semibold transition-all hover:bg-opacity-90 active:scale-95"
                  >
                    {{ $t("text.send") }}
                  </button>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: Boolean,
    default: false,
  },
  name: "feedbackmodal",
  data() {
    return {
      user: {
        phone_number: "",
        full_name: "",
        comment: "",
      },
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },
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

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.close:hover {
  svg {
    path {
      stroke: aqua;
    }
  }
}
</style>
