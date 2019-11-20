module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          },
          firstName: {
            type: DataTypes.STRING
          },
          lastName: {
            type: DataTypes.STRING
          }, 
          totalTodosCompleted: {
            type: DataTypes.INTEGER
          } 
    })
    return User
}