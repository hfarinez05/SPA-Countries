const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      Duracion: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      Temporada: {
        type: DataTypes.ENUM("Verano", "Invierno", "Otoño", "Primavera"),
      },
    },
    {
      timestamps: false,
    }
  );
};
