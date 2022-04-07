const mongoose = require('mongoose')


const dbConnection = async () => {
  try {
      await mongoose.connect(process.env.DB_URI,{
          useNewUrlParser:true,
          useUnifiedTopology:true,
      });
      console.log('Base de datos conectada');
  } catch (error) {
      console.log(error);
      throw new Error('Error en la inicialización de la base de datos');
  }

}

module.exports = {
    dbConnection
}