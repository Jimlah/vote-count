module.exports = {
  HOST: "127.0.0.1" || "localhost",
  USER: "rootv2",
  PASSWORD: "",
  DATABASE: "test",
  dialect: "mysql",
  port: "3306",
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};
