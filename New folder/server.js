const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const todo = require("./routes/api/ToDo");
const app = express();

var postMessageRoutes = require('./routes/api/postMessages')
const cors = require("cors");


//const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

function success(res, payload){
  return res.status(200).json(payload);
}
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


app.use(passport.initialize()); 
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/Todos",todo);
app.use('/postMessages',postMessageRoutes)
const port = process.env.PORT || 5000; 


app.listen(port, () => console.log(`Server up and running on port ${port} !`));
