<template>
  <div class="header-parent header-op">
    <header
      class="header border-bottom fixed top-0 z-50 transition-all duration-500 w-full header-scroll scrolled-down lg:block hidden"
      :class="{
        down: isDown,
        scrolled: isScrolled,
        'white-style': $route.name !== 'index' && $route.name !== 'models',
      }"
    >
      <div class="header-top">
        <div class="container">
          <div
            class="header-top-content flex items-center justify-between h-[80px] transition-all whitespace-no-wrap relative"
          >
            <div class="header-logo flex items-center">
              <nuxt-link to="/">
                <img src="/svg/logo.svg" alt="" />
              </nuxt-link>
            </div>
            <ul class="menu menu-list flex items-center gap-5 h-full">
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ name: 'models' }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  Modellar
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ name: 'katalog' }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  Katalog
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ name: 'offers' }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  Maxsus takliflar
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ name: 'contacts' }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  Kontaktlar
                </nuxt-link>
              </li>
            </ul>
            <ul
              class="menu menu-list flex items-center justify-end gap-5 h-full"
            >
              <li class="cursor-pointer" @click="modal = true">
                <span
                  class="text-sm font-semibold flex items-center justify-center h-[40px] bg-[#00FFFF] rounded-[4px] px-10"
                  style="box-shadow: 0px 0px 27.5px -1px rgba(0, 255, 255, 0.4)"
                >
                  Bog’lanish
                </span>
              </li>

              <li
                class="cursor-pointer dropdown"
                @click="languageDropdown = !languageDropdown"
                v-on-click-outside:excludedClass="hideLanguageDropdown"
              >
                <div
                  class="text-sm font-medium flex items-center justify-center h-[40px] bg-[#00FFFF] rounded-[4px] px-4"
                  style="box-shadow: 0px 0px 27.5px -1px rgba(0, 255, 255, 0.4)"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-[0.2rem]"
                  >
                    <path
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M9.00023 21.75H8.00023C7.59023 21.75 7.25023 21.41 7.25023 21C7.25023 20.59 7.57023 20.26 7.98023 20.25C6.41023 14.89 6.41023 9.11 7.98023 3.75C7.57023 3.74 7.25023 3.41 7.25023 3C7.25023 2.59 7.59023 2.25 8.00023 2.25H9.00023C9.24023 2.25 9.47023 2.37 9.61023 2.56C9.75023 2.76 9.79023 3.01 9.71023 3.24C7.83023 8.89 7.83023 15.11 9.71023 20.77C9.79023 21 9.75023 21.25 9.61023 21.45C9.47023 21.63 9.24023 21.75 9.00023 21.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M15.0004 21.7502C14.9204 21.7502 14.8404 21.7402 14.7604 21.7102C14.3704 21.5802 14.1504 21.1502 14.2904 20.7602C16.1704 15.1102 16.1704 8.89018 14.2904 3.23018C14.1604 2.84018 14.3704 2.41018 14.7604 2.28018C15.1604 2.15018 15.5804 2.36018 15.7104 2.75018C17.7004 8.71018 17.7004 15.2702 15.7104 21.2202C15.6104 21.5502 15.3104 21.7502 15.0004 21.7502Z"
                      fill="#292D32"
                    />
                    <path
                      d="M12 17.1998C9.21 17.1998 6.43 16.8098 3.75 16.0198C3.74 16.4198 3.41 16.7498 3 16.7498C2.59 16.7498 2.25 16.4098 2.25 15.9998V14.9998C2.25 14.7598 2.37 14.5298 2.56 14.3898C2.76 14.2498 3.01 14.2098 3.24 14.2898C8.89 16.1698 15.12 16.1698 20.77 14.2898C21 14.2098 21.25 14.2498 21.45 14.3898C21.65 14.5298 21.76 14.7598 21.76 14.9998V15.9998C21.76 16.4098 21.42 16.7498 21.01 16.7498C20.6 16.7498 20.27 16.4298 20.26 16.0198C17.57 16.8098 14.79 17.1998 12 17.1998Z"
                      fill="#292D32"
                    />
                    <path
                      d="M20.9998 9.74986C20.9198 9.74986 20.8398 9.73986 20.7598 9.70986C15.1098 7.82986 8.87978 7.82986 3.22978 9.70986C2.82978 9.83986 2.40978 9.62986 2.27978 9.23986C2.15978 8.83986 2.36978 8.41986 2.75978 8.28986C8.71978 6.29986 15.2798 6.29986 21.2298 8.28986C21.6198 8.41986 21.8398 8.84986 21.6998 9.23986C21.6098 9.54986 21.3098 9.74986 20.9998 9.74986Z"
                      fill="#292D32"
                    />
                  </svg>
                  <span class="text-sm ml-1 text-black font-[600]"> O'zb </span>
                </div>
                <transition name="dropdown">
                  <div class="dropdown-menu__content" v-if="languageDropdown">
                    <ul class="dropdown-menu">
                      <li class="dropdown-menu-item">
                        <span> O'zbek </span>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <header
      class="fixed top-0 z-50 w-full bg-[#262626] block lg:hidden header-scroll scrolled-down"
      :class="{
        down: isDown,
        scrolled: isScrolled,
        'white-style': $route.name !== 'index' && $route.name !== 'models',
      }"
    >
      <div class="flex items-center justify-between h-[60px] px-[20px]">
        <div @click="showNavigationDrawer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <nuxt-link to="/">
          <img src="/svg/logo.svg" alt="" />
        </nuxt-link>
        <a href="#">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            class="icon z-[1]"
          >
            <path
              d="M2.494 3.506l1.299-1.299a1 1 0 011.414 0l2.66 2.66A1 1 0 017.941 6.2l-.681.851c-.467.584-.583 1.388-.203 2.032 1.318 2.23 3.191 3.5 4.511 4.086.57.254 1.218.103 1.706-.287l1.027-.822a1 1 0 011.332.074l2.603 2.603a1 1 0 01-.056 1.467l-1.691 1.45c-.63.54-1.46.82-2.286.734-1.801-.19-4.602-.786-7.703-3.887-3.716-3.716-4.577-6.634-4.855-8.603-.125-.882.219-1.761.849-2.39z"
              stroke="#fff"
              stroke-width="1.5"
            ></path>
          </svg>
        </a>
      </div>
    </header>
    <div
      class="w-full transition-transform duration-400 h-screen bg-white text-black fixed z-[9999] top-0 left-0"
      :class="navigationDrawer ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="w-full h-screen pt-[120px] px-5 relative">
        <div class="w-[98px] absolute top-0 inset-x-0 mx-auto bg-gray-700 p-3">
          <nuxt-link to="/">
            <img src="/svg/logo.svg" alt="logo-dark" />
          </nuxt-link>
        </div>
        <div class="flex flex-col items-start gap-y-4">
          <nuxt-link
            to="/offers"
            class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
          >
            Maxsus taklif
          </nuxt-link>
          <nuxt-link
            to="/models"
            class="text-dark text-base leading-140 hover:text-black transition-200 font-semibold"
          >
            Моdellar
          </nuxt-link>
          <nuxt-link
            to="/business"
            class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
          >
            Biznes uchun
          </nuxt-link>
          <nuxt-link
            to="/contacts"
            class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
          >
            Kontaktlar
          </nuxt-link>
        </div>
        <div class="absolute bottom-[70px]">
          <span class="text-sm block leading-17 text-black mb-3">
            © 2023. Megavolt motors. Barcha huquqlar himoyalangan.
          </span>
        </div>
      </div>
    </div>
    <feedback-modal :value="modal" @close="modal = false" />
  </div>
</template>

<script>
import FeedbackModal from "../../shared-components/Feedback-modal.vue";
export default {
  name: "AppHeader",
  components: { FeedbackModal },
  data() {
    return {
      languageDropdown: false,
      isDown: false,
      isScrolled: false,
      lastScrollPosition: 0,
      languageDropdown: false,
      navigationDrawer: false,
      modal: false,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = currentScrollPosition > 80;
      if (
        currentScrollPosition > this.lastScrollPosition &&
        currentScrollPosition > 80
      ) {
        this.isDown = true;
      } else {
        this.isDown = false;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) > 10) {
        this.lastScrollPosition = currentScrollPosition;
      }
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    changeLanguage(lang) {
      this.$router.push(this.switchLocalePath(lang));
    },
    showNavigationDrawer() {
      this.navigationDrawer = true;
    },
    close() {
      this.showNavigationDrawer = false;
    },
  },
  watch: {
    $route(to, from) {
      this.navigationDrawer = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.header.down.scrolled {
  top: -80px;
}
.border-bottom {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
}
.header.scrolled {
  background-color: #262626;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-bottom: none !important;
}
.header.white-style {
  background-color: #262626;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-bottom: none !important;
}
</style>
