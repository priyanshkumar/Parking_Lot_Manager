module.exports = (sequelize, DataTypes) => {
  var ParkingSpot = sequelize.define("ParkingSpot", {
    spotName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    spotZone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isSpotAllocated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    isPendingApproval: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    spotPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });

  ParkingSpot.associate = models => {
    ParkingSpot.belongsTo(models.Customer, {
      foreignKey: "CustomerId"
    });
  };

  return ParkingSpot;
};
