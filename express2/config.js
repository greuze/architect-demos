module.exports = [
  { packagePath: "./plugins/http-server",
    port: process.env.PORT || 8080
  },
  "./plugins/fail",
  "auth",
  "db"
]
