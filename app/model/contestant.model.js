module.exports = (sequelize, Sequelize) => {
  const Contestant = sequelize.define("contestant", {
    election_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "elections",
        key: "id",
      },
    },
    name: {
      type: Sequelize.STRING(255),
    },
  });

  Contestant.associate = (models) => {
    Contestant.belongsTo(models.elections);
  };

  return Contestant;
};
