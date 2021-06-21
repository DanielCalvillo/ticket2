module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    profile_picture: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    degrees: {
      type: DataTypes.STRING
    },
    languages: {
      type: DataTypes.STRING
    },
    linkedin_profile: {
      type: DataTypes.STRING
    },
    hobbies: {
      type: DataTypes.STRING
    }
  }, {});
  return User;
};