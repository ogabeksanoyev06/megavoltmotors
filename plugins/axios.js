export let baseURL = "https://api.uz-megavoltmotors.uz/api/";
export default function ({ $axios, redirect }) {
  $axios.defaults.baseURL = baseURL;
  $axios.setBaseURL("https://api.uz-megavoltmotors.uz/api/");
  $axios.onRequest((config) => {
    console.log("Making request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    } else {
      console.error("Server xatosi:", error);
    }
  });
}
