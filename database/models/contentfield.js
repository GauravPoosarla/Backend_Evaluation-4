"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentField extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContentField.belongsTo(models.Content, {
        foreignKey: "content_id",
      });
    }
  }
  ContentField.init(
    {
      field_id: DataTypes.INTEGER,
      content_id: DataTypes.INTEGER,
      fields: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ContentField",
    }
  );
  return ContentField;
};
