'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    publisher: DataTypes.STRING
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
  };
  return Book;
};
