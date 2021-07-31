const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    // port: dbConfig.port,
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.election = require("./election.model")(sequelize, Sequelize);
db.contestant = require("./contestant.model")(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("\nDatabase table is created!");
});

module.exports = db;
