const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      ID: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Continente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Area: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Poblacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
