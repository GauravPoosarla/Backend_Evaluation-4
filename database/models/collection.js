"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Collection.hasMany(models.Content, {
        foreignKey: "collection_id",
        sourceKey: "collection_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Collection.init(
    {
      collection_id: DataTypes.INTEGER,
      collection_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Collection",
    }
  );
  return Collection;
};
