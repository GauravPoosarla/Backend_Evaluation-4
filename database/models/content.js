"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.belongsTo(models.Collection, {
        foreignKey: "collection_id",
      });

      Content.hasOne(models.ContentField, {
        foreignKey: "content_id",
        sourceKey: "content_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Content.init(
    {
      collection_id: DataTypes.INTEGER,
      content_id: DataTypes.INTEGER,
      content_name: DataTypes.STRING,
      values: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};
