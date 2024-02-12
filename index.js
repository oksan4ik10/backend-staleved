// const mongoose = require('mongoose')
// const config = require('./db/config')
const app = require('./app')



const PORT = process.env.PORT || 4000

async function start() {
    try {
    //   const db = await mongoose.connect(
    //     config.ATLAS_URI,
    //     {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //     }
    //   )
  
      app.listen(PORT, () => {
        console.log(`Server has been started ${PORT}...`)
      })
    //   if(db){
    //     console.log("Successfully connected to MongoDB.");
    //   } else{
    //     throw new Error('Not connect DB')
    //   }
    } catch (e) {
      console.log(e)
    }
  }
  
  start()