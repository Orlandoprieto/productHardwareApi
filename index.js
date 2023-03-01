require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = 3001;
app.listen(PORT, async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Se inicio un servidor en el puerto ${PORT}`)
    } catch (error) {
        console.log(Error, "la conexion fallo")
    }
})