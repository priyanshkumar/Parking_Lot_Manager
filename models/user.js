module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    profileID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  User.associate = models => {
    User.hasOne(models.Customer);
  };

  return User;
};
