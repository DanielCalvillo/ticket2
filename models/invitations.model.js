module.exports = (sequelize, DataTypes) => {
  const Invitation = sequelize.define("invitations", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sender: {
      type: DataTypes.STRING,
      foreignKey: true
    },
    receiver: {
      type: DataTypes.STRING,
      foreignKey: true
    }
  }, {});

  return Invitation;
};