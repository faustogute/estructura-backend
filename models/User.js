import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String
})

export default mongoose.model('User', userSchema)
