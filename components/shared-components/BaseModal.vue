<template>
  <transition name="fade" v-if="value">
    <div class="modal fixed top-0 w-auto h-auto z-[1000]">
      <div
        class="bg-[#000000b3] w-full h-screen w-screen flex justify-center items-center px-4"
      >
        <div class="!bg-transparent bg-white">
          <div
            class="w-[98vw] h-[300px] sm:w-[350px] sm:h-[270px] md:w-[400px] lg:w-[600px] md:h-[300px] lg:h-[400px] relative"
          >
            <button
              class="close outline-none absolute top-[-30px] right-0 sm:right-[-30px]"
              @click="close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6 6L18 18"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    value: Boolean,
    default: false,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },

  mounted() {},
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
