const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    audioOrVideo: {
      type: DataTypes.INTEGER,
    },
    mantra: {
      type: DataTypes.INTEGER,
    },
  });

  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook('beforeCreate', function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null,
    );
  });

  return User;
};
