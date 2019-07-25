module.exports = (sequelize, DataTypes) => {
  let ParkingSpot = sequelize.define("ParkingSpot", {
    spotName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    spotZone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    spotType: {
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
    },
    isCheckout: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    }
  });

  ParkingSpot.associate = models => {
    ParkingSpot.belongsTo(models.Customer);
  };

  return ParkingSpot;
};
