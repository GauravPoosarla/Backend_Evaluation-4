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
      Content.belongsTo(models.collection, {
        foreignKey: "collection_id",
      });

      // 1 to 1 relationship with content_fields
      Content.hasOne(models.content_fields, {
        foreignKey: "content_id",
        as: "content_fields",
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
      values: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};
