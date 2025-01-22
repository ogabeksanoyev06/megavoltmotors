<template>
  <div class="footer w-full py-12 bg-[#000] z-[999]">
    <div class="container">
      <div
        class="flex flex-col items-center border-b border-white border-b-[0.5px] pb-8"
      >
        <div class="mb-8">
          <nuxt-link to="/">
            <img src="/assets/svg/logo.svg" alt="" />
          </nuxt-link>
        </div>
        <ul
          class="flex flex-col sm:flex-row gap-x-[30px] gap-y-8 sm:text-left text-center mb-8"
        >
          <li class="cursor-pointer">
            <nuxt-link
              :to="{ path: localePath(`/models`) }"
              class="text-white text-sm leading-[17px] hover:text-main transition-all"
            >
              {{ $t("text.models") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer">
            <nuxt-link
              :to="{ path: localePath('/katalog') }"
              class="text-white text-sm leading-[17px] hover:text-main transition-all"
            >
              {{ $t("text.katalog") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer">
            <nuxt-link
              :to="{ path: localePath('/offers') }"
              class="text-white text-sm leading-[17px] hover:text-main transition-all"
            >
              {{ $t("text.offers") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer">
            <nuxt-link
              :to="{ path: localePath('/services') }"
              class="text-white text-sm leading-[17px] hover:text-main transition-all"
            >
              {{ $t("text.services") }}
            </nuxt-link>
          </li>
          <li class="cursor-pointer">
            <nuxt-link
              :to="{ path: localePath('/contacts') }"
              class="text-white text-sm leading-[17px] hover:text-main transition-all"
            >
              {{ $t("text.contacts") }}
            </nuxt-link>
          </li>
        </ul>

        <ul class="flex items-center gap-x-6">
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
                  stroke="#fff"
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
                  stroke="#fff"
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
                  stroke="#fff"
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
            <a href="https://www.youtube.com/@megavolt_motors" target="_blank">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.32532C3 8.26445 3.42143 7.24704 4.17157 6.49689C4.92172 5.74674 5.93913 5.32532 7 5.32532H17C18.0609 5.32532 19.0783 5.74674 19.8284 6.49689C20.5786 7.24704 21 8.26445 21 9.32532V15.3253C21 16.3862 20.5786 17.4036 19.8284 18.1537C19.0783 18.9039 18.0609 19.3253 17 19.3253H7C5.93913 19.3253 4.92172 18.9039 4.17157 18.1537C3.42143 17.4036 3 16.3862 3 15.3253V9.32532Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 9.32532L15 12.3253L10 15.3253V9.32532Z"
                  stroke="#fff"
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
      </div>
      <div class="w-full pt-[50px]">
        <div
          class="flex items-center sm:justify-between justify-center flex-wrap gap-y-8 flex-col sm:flex-row"
        >
          <div
            class="flex flex-col sm:flex-row items-center text-center sm:text-left cursor-pointer group sm:w-[50%] lg:w-auto"
          >
            <div
              class="sm:mr-6 w-6 h-6 flex items-center justify-center lg:text-[24px] sm:text-[20px] text-[18px]"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.3252C15.5304 7.3252 16.0391 7.53591 16.4142 7.91098C16.7893 8.28605 17 8.79476 17 9.3252M15 3.3252C16.5913 3.3252 18.1174 3.95734 19.2426 5.08255C20.3679 6.20777 21 7.7339 21 9.3252M5 4.3252H9L11 9.3252L8.5 10.8252C9.57096 12.9967 11.3285 14.7542 13.5 15.8252L15 13.3252L20 15.3252V19.3252C20 19.8556 19.7893 20.3643 19.4142 20.7394C19.0391 21.1145 18.5304 21.3252 18 21.3252C14.0993 21.0881 10.4202 19.4317 7.65683 16.6684C4.8935 13.905 3.23705 10.2259 3 6.3252C3 5.79476 3.21071 5.28605 3.58579 4.91098C3.96086 4.53591 4.46957 4.3252 5 4.3252Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-main"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-400 text-sm leading-140">Telefon</p>
              <a
                href="tel:998554044444"
                class="text-white text-base transition-200 leading-140 font-semibold"
              >
                +998 55 404 44 44
              </a>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row items-center text-center sm:text-left cursor-pointer group w-[50%] lg:w-auto"
          >
            <div
              class="sm:mr-6 w-6 h-6 flex items-center justify-center lg:text-[24px] sm:text-[20px] text-[18px]"
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.3252C1 2.79476 1.21071 2.28605 1.58579 1.91098C1.96086 1.53591 2.46957 1.3252 3 1.3252H17C17.5304 1.3252 18.0391 1.53591 18.4142 1.91098C18.7893 2.28605 19 2.79476 19 3.3252M1 3.3252V13.3252C1 13.8556 1.21071 14.3643 1.58579 14.7394C1.96086 15.1145 2.46957 15.3252 3 15.3252H17C17.5304 15.3252 18.0391 15.1145 18.4142 14.7394C18.7893 14.3643 19 13.8556 19 13.3252V3.3252M1 3.3252L10 9.3252L19 3.3252"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-main"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-400 text-sm leading-140">Email</p>
              <a
                class="text-white text-base leading-140 transition-200 font-semibold"
                href="info@megavoltmotors.uz"
                target="_blank"
              >
                info@megavoltmotors.uz
              </a>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row items-center text-center sm:text-left cursor-pointer group w-[50%] lg:w-auto"
          >
            <div
              class="sm:mr-6 w-6 h-6 flex items-center justify-center lg:text-[24px] sm:text-[20px] text-[18px]"
            >
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9.32539C6 10.121 6.31607 10.8841 6.87868 11.4467C7.44129 12.0093 8.20435 12.3254 9 12.3254C9.79565 12.3254 10.5587 12.0093 11.1213 11.4467C11.6839 10.8841 12 10.121 12 9.32539C12 8.52974 11.6839 7.76668 11.1213 7.20407C10.5587 6.64146 9.79565 6.32539 9 6.32539C8.20435 6.32539 7.44129 6.64146 6.87868 7.20407C6.31607 7.76668 6 8.52974 6 9.32539Z"
                  stroke="#fff"
                  class="group-hover:stroke-main"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.657 14.9824L10.414 19.2254C10.039 19.6 9.53059 19.8105 9.0005 19.8105C8.47042 19.8105 7.96202 19.6 7.587 19.2254L3.343 14.9824C2.22422 13.8636 1.46234 12.4381 1.15369 10.8863C0.845043 9.33442 1.00349 7.72591 1.60901 6.26412C2.21452 4.80234 3.2399 3.55293 4.55548 2.6739C5.87107 1.79486 7.41777 1.32568 9 1.32568C10.5822 1.32568 12.1289 1.79486 13.4445 2.6739C14.7601 3.55293 15.7855 4.80234 16.391 6.26412C16.9965 7.72591 17.155 9.33442 16.8463 10.8863C16.5377 12.4381 15.7758 13.8636 14.657 14.9824Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-main"
                />
              </svg>
            </div>
            <div>
              <p class="text-gray-400 text-sm leading-140">Manzil</p>
              <a
                class="text-white text-base transition-200 leading-140 font-semibold"
                href="https://maps.app.goo.gl/3mX6JHrGVtBCYb4P9"
                target="_blank"
              >
                Toshkent shahar,Sergeli tumani,TKAD 58-B
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style lang="scss" scoped>
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
