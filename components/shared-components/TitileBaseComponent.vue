<template>
  <div class="relative flex justify-center mb-[40px]">
    <span
      class="text-center inline-block bg-[#05141f] text-[#0FF] font-semibold px-4 text-xl sm:px-8 sm:text-2xl md:text-4xl uppercase z-1"
    >
      {{ title }}
    </span>
    <div
      class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-[#FFF] z-[-1] hidden sm:block"
    ></div>
  </div>
</template>

<script>
export default {
  name: "title-base",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
