const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  interests: {
    type: DataTypes.TEXT,
    allowNull: false,
    get(){
      const rawValue = this.getDataValue("interests");
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value){
      this.setDataValue("interests", JSON.stringify(value));
    },
  },
  shortlisted: {
    type: DataTypes.TEXT,
    defaultValue: "[]",
    get(){
      const raw = this.getDataValue("shortlisted");
      return raw ? JSON.parse(raw) : [];
    },
    set(value){
      this.setDataValue("shortlisted", JSON.stringify(value));
    },
  },
});

module.exports = User;