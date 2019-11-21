module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Tasks', {
    taskItem: { type: DataTypes.STRING },
  });
  return Task;
};

// userID: { type: DataTypes.INTEGER, allowNull: false },
