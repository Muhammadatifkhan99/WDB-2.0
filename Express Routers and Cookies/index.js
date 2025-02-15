const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelter");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");


app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/",adminRoutes);



app.listen("4000",() => {
    console.log("App is lisening on port 3000");
})