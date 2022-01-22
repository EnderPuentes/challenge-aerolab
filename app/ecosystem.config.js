module.exports = {
  apps: [
    {
      name: "WebAppChallenge",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      max_memory_restart: "300M"
    }
  ]
};
