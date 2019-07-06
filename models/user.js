module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    profileID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
