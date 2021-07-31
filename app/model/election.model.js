module.exports = (sequelize, Sequelize) => {
  const Election = sequelize.define("election", {
    title: {
      type: Sequelize.STRING(11),
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    election_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  Election.associate = (models) => {
    Election.hasMany(models.contestant, {
      foreignKey: "election_id",
      as: "contestants",
    });
  };

  return Election;
};
