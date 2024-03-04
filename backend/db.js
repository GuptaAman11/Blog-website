


const mongoose = require('mongoose')


const url = 'mongodb+srv://amangupta9579:project@cluster0.zpnhulm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}