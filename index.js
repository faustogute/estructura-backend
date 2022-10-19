import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://faustogute:aloco888@testcluster.n8blvfh.mongodb.net/test',
  () => {
    console.log('Conexión a base de datos satisfactoria 💚')
  }
)
