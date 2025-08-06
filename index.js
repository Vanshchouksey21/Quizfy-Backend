const express = require ("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const authRoutes = require("./routes/authRoutes")


const app = express();
app.use(cors());
app.use(bodyparser.json());


mongoose.connect(process.env.MONGO_URI)



app.use("/api", authRoutes);
app.get("/" , (req , res)=>{
  res.send("done")
})


const subjectRoutes = require('./routes/subjectRoutes');

app.use('/api/subjects', subjectRoutes);


const questionRoutes = require('./routes/questionRoutes');
app.use('/api/questions', questionRoutes);

app.use('/api/leaderboard', leaderboardRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});