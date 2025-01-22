import Vue from "vue";
import Snotify, { SnotifyPosition } from "vue-snotify";
import "vue-snotify/styles/material.css";

const options = {
  toast: {
    position: SnotifyPosition.rightBottom,
    showProgressBar: false,
    timeout: 2000,
    titleMaxLength: 100,
  },
};

Vue.use(Snotify, options);
