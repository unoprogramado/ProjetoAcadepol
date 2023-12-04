const { Sequelize } = require("sequelize")

const sequelize =  new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect: process.env.BD,
    dialectModule: require('mysql2'),
})



module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}

// usuario.sync()

