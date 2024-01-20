const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();



const dataPlant = require("./controllers/dataPlant")
const middlewares = require("./middlewares/validateId");

const app = express();
app.use(express.json());
app.use(cors());
app.options("*",cors());

// const PORT = 8000;

// const MONGODB_URI = "mongodb://localhost:27017/schedule"
// const MONGODB_URI = "mongodb+srv://anubhawmaurya:dataplant-schedules@schedules.dlgcuzk.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log("connected to mongoDB")}).catch((e)=>{console.log("Error connecting to mongoDB")});


app.get("/schedule", dataPlant.getAllSchedules);
app.get("/schedule/:id", middlewares.validateId, dataPlant.getScheduleById)
// app.get("/schedule", dataPlant.getScheduleByTitle)


app.delete("/schedule/:id",middlewares.validateId,  dataPlant.deleteScheduleById)
app.patch("/schedule/:id",middlewares.validateId, dataPlant.updateScheduleById)
app.post("/schedule", dataPlant.createNewSchedule);

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port 8000');
})