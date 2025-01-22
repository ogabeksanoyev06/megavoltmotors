<template>
  <div>
    <div id="app-layout">
      <AppHeader />
      <main
        :class="{
          'min-h-[calc(100vh_-_80px)] mt-[80px]':
            $route.path !== localePath(`/`) &&
            $route.path !== localePath(`/models`),
        }"
      >
        <vue-snotify />
        <Nuxt />
      </main>
      <AppFooter v-if="$route.path !== localePath(`/models`)" />
    </div>
  </div>
</template>

<script>
import AppFooter from "../components/default/footer/app-footer.vue";
import AppHeader from "../components/default/header/app-header.vue";
export default {
  components: { AppHeader, AppFooter },
  name: "default",
};
</script>

<style lang="scss" scoped></style>
