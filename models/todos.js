module.exports = (sequelize, DataTypes) => {
    var Task = sequelize.define("Tasks", {
        taskItem: { type: DataTypes.STRING},
        userID: { type: DataTypes.INTEGER, allowNull: false }
    })
    return Task
}