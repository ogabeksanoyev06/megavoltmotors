module.exports = {
  apps: [
    {
      name: "megavoltmotors",
      exec_mode: "cluster", // Cluster mode for multiple instances
      instances: "max", // Yoki kerakli miqdorda instansiya sonini kiriting (masalan: 2, 4)
      script: "./node_modules/nuxt/bin/nuxt.js", // Nuxt start script
      args: "start", // Nuxt ilovasini ishga tushirish uchun 'start' argumenti
      env: {
        PORT: 3010, // Ilovani ishlatish uchun portni belgilash
        NODE_ENV: "production", // Ishga tushirish muhiti
      },
    },
  ],
};
