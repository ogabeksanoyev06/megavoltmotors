<template>
  <div class="header-parent header-op">
    <header
      class="header border-bottom fixed top-0 z-50 transition-all duration-500 w-full header-scroll scrolled-down lg:block hidden"
      :class="{
        down: isDown,
        scrolled: isScrolled,
        'white-style':
          $route.path !== localePath(`/`) &&
          $route.path !== localePath(`/models`),
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
                  :to="{ path: localePath(`/models`) }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  {{ $t("text.models") }}
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ path: localePath('/katalog') }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  {{ $t("text.katalog") }}
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ path: localePath('/offers') }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  {{ $t("text.offers") }}
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ path: localePath('/services') }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  {{ $t("text.services") }}
                </nuxt-link>
              </li>
              <li class="cursor-pointer h-full">
                <nuxt-link
                  :to="{ path: localePath('/contacts') }"
                  class="text-base font-medium text-white flex items-center justify-center h-full"
                >
                  {{ $t("text.contacts") }}
                </nuxt-link>
              </li>
            </ul>
            <ul
              class="menu menu-list flex items-center justify-end gap-5 h-full"
            >
              <li class="cursor-pointer" @click="modal = true">
                <span
                  class="text-sm font-semibold border border-[#00FFFF] flex items-center justify-center h-[40px] bg-transparent rounded-[4px] px-10 text-white"
                  style="box-shadow: 0px 0px 27.5px -1px rgba(0, 255, 255, 0.4)"
                >
                  {{ $t("text.a") }}
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
                  <span class="text-sm ml-1 text-black font-[600]">
                    {{ localeName }}
                  </span>
                </div>
                <transition name="dropdown">
                  <div class="dropdown-menu__content" v-if="languageDropdown">
                    <ul class="dropdown-menu">
                      <li
                        class="dropdown-menu-item"
                        v-for="(lang, index) in $i18n.locales"
                        :key="index"
                        @click="changeLanguage(lang)"
                      >
                        <span> {{ lang.name }} </span>
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
      class="fixed top-0 z-50 w-full bg-[#000] block lg:hidden header-scroll scrolled-down"
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
      <div class="w-full h-screen px-5 relative">
        <div class="flex items-center mb-[40px]">
          <div @click="navigationDrawer = false" class="pointer">
            <svg
              width="32"
              height="32"
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
          </div>
          <div class="w-[98px] mx-auto bg-gray-700 p-3">
            <nuxt-link to="/">
              <img src="/svg/logo.svg" alt="logo-dark" />
            </nuxt-link>
          </div>
        </div>
        <ul class="flex flex-col items-start gap-y-4">
          <li class="cursor-pointer h-full">
            <nuxt-link
              :to="{ path: localePath(`/models`) }"
              class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
            >
              {{ $t("text.models") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer h-full">
            <nuxt-link
              :to="{ path: localePath('/katalog') }"
              class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
            >
              {{ $t("text.katalog") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer h-full">
            <nuxt-link
              :to="{ path: localePath('/offers') }"
              class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
            >
              {{ $t("text.offers") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer h-full">
            <nuxt-link
              :to="{ path: localePath('/services') }"
              class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
            >
              {{ $t("text.services") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer h-full">
            <nuxt-link
              :to="{ path: localePath('/contacts') }"
              class="text-black text-base leading-140 hover:text-black transition-200 font-semibold"
            >
              {{ $t("text.contacts") }}
            </nuxt-link>
          </li>
        </ul>
        <div class="absolute bottom-[20px]">
          <ul class="flex items-center gap-x-6 mb-[20px]">
            <li class="relative group">
              <a href="#" target="_blank">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 7.82532V7.83532M4 8.32532C4 7.26445 4.42143 6.24704 5.17157 5.49689C5.92172 4.74674 6.93913 4.32532 8 4.32532H16C17.0609 4.32532 18.0783 4.74674 18.8284 5.49689C19.5786 6.24704 20 7.26445 20 8.32532V16.3253C20 17.3862 19.5786 18.4036 18.8284 19.1537C18.0783 19.9039 17.0609 20.3253 16 20.3253H8C6.93913 20.3253 5.92172 19.9039 5.17157 19.1537C4.42143 18.4036 4 17.3862 4 16.3253V8.32532ZM9 12.3253C9 13.121 9.31607 13.884 9.87868 14.4466C10.4413 15.0092 11.2044 15.3253 12 15.3253C12.7956 15.3253 13.5587 15.0092 14.1213 14.4466C14.6839 13.884 15 13.121 15 12.3253C15 11.5297 14.6839 10.7666 14.1213 10.204C13.5587 9.64139 12.7956 9.32532 12 9.32532C11.2044 9.32532 10.4413 9.64139 9.87868 10.204C9.31607 10.7666 9 11.5297 9 12.3253Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 transition-all duration-300 -z-1 opacity-0 translate-y-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-y-4 z-[9999]"
              >
                <div class="tooltip">Instagram</div>
              </div>
            </li>
            <li class="relative group">
              <a href="#" target="_blank">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.3253V14.3253H10V21.3253H14V14.3253H17L18 10.3253H14V8.32532C14 8.0601 14.1054 7.80575 14.2929 7.61821C14.4804 7.43067 14.7348 7.32532 15 7.32532H18V3.32532H15C13.6739 3.32532 12.4021 3.8521 11.4645 4.78978C10.5268 5.72747 10 6.99923 10 8.32532V10.3253H7Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 transition-all duration-300 -z-1 opacity-0 translate-y-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-y-4 z-[9999]"
              >
                <div class="tooltip">Facebook</div>
              </div>
            </li>
            <li class="relative group">
              <a href="https://t.me/megavoltmotors" target="_blank">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10.3253L11 14.3253L17 20.3253L21 4.32532L3 11.3253L7 13.3253L9 19.3253L12 15.3253"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 transition-all duration-300 -z-1 opacity-0 translate-y-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-y-4 z-[9999]"
              >
                <div class="tooltip">Telegram</div>
              </div>
            </li>
            <li class="relative group">
              <a
                href="https://www.youtube.com/@megavolt_motors"
                target="_blank"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9.32532C3 8.26445 3.42143 7.24704 4.17157 6.49689C4.92172 5.74674 5.93913 5.32532 7 5.32532H17C18.0609 5.32532 19.0783 5.74674 19.8284 6.49689C20.5786 7.24704 21 8.26445 21 9.32532V15.3253C21 16.3862 20.5786 17.4036 19.8284 18.1537C19.0783 18.9039 18.0609 19.3253 17 19.3253H7C5.93913 19.3253 4.92172 18.9039 4.17157 18.1537C3.42143 17.4036 3 16.3862 3 15.3253V9.32532Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 9.32532L15 12.3253L10 15.3253V9.32532Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 transition-all duration-300 -z-1 opacity-0 translate-y-0 invisible group-hover:visible group-hover:opacity-100 group-hover:-translate-y-4 z-[9999]"
              >
                <div class="tooltip">Youtube</div>
              </div>
            </li>
          </ul>
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
      locale: this.$i18n.locale,
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
      this.$router.push(this.switchLocalePath(lang.code));
      this.locale = this.$i18n.locale;
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
  computed: {
    localeName() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale)
        .name;
    },
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
  background-color: #000;
  box-shadow: 0 2px 6px rgba(70, 93, 122, 0.5);
  border-bottom: none !important;
}
.header.white-style {
  background-color: #000;
  box-shadow: 0 2px 6px rgba(70, 93, 122, 0.5);
  border-bottom: none !important;
}
.tooltip {
  border-radius: 0.5rem;
  background-color: #00ffff;
  color: #000;
  font-weight: 500;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 0.5rem 1rem;
  position: relative;
  white-space: nowrap;
  &::after {
    position: absolute;
    content: "";
    bottom: -4px;
    height: 8px;
    left: calc(50% - 4px);
    transform: translateX(-50%);
    width: 8px;
    background-color: #00ffff;
    transform: rotate(45deg);
    z-index: -1;
  }
}
.group:hover .group-hover\:stroke-main {
  stroke: #00ffff; /* Blue color */
}
</style>
