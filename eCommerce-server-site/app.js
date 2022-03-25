const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleWar = require("./middlewares/errorMiddleWare");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());


/*
--------------  routes --------------
*/

// import route from routes
const errorMiddleWare = require("./middlewares/errorMiddleWare");
const productRouter = require("./routes/productRoute");
const userRouter = require('./routes/userRoute');

// register route in the app
app.use('/auth', userRouter);
app.use('/products', productRouter);





// error middleware
app.use(errorMiddleWare);



// app exported
module.exports =  app ;