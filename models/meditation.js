module.exports = (sequelize, DataTypes) => {
    var Meditation = sequelize.define("Meditations", {
        meditationName: {
            type: DataTypes.STRING
        },
        meditationURL: {
            type: DataTypes.STRING
        },
        meditationDescription: {
            type: DataTypes.TEXT
        }
    })
    return Meditation
}