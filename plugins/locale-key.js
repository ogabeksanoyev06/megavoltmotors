import Vue from "vue";

// localeKey metodini Vue prototipiga qo'shish
Vue.prototype.$localeKey = function (key) {
  // Bu yerda `$i18n` o'rniga `this.$i18n` dan foydalanish kerak, chunki bu Vue instance kontekstida ishlatiladi
  return this.$i18n.locale == "uz"
    ? key + "_uz"
    : this.$i18n.locale == "ru"
    ? key + "_ru"
    : this.$i18n.locale == "en"
    ? key + "_en"
    : key + "_uz";
};
