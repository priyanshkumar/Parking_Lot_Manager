module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define("Customer", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyPointOfContact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    streetNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    faxNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cellPhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    workPhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Customer.associate = models => {
    Customer.hasMany(models.ParkingSpot);
  };

  return Customer;
};
