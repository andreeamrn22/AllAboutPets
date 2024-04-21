import { Sequelize } from "sequelize";
import db from "../dbConfig.js";

export const Client = db.define("client", {
  id_client: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nume: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  prenume: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Verifică dacă este o adresă de email validă
    },
  },
  telefon: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
});
