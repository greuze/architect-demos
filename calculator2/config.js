module.exports = [
  { packagePath: "./plugins/architect-http",
    port: process.env.PORT || 8080,
    host: process.env.IP || "0.0.0.0"
  },
  { packagePath: "./plugins/architect-http-static", root: "www" },
  "./plugins/calculator",
  "./plugins/db",
  "./plugins/auth"
]
