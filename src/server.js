// import http from 'express'
const http = require("express");
require("dotenv").config();
import configViewEngine from "./config/ViewEngine";
import initWebRouter from "./router/web";

const app = http();

const port = process.env.PORT || 8080; //backup port when undefined

//set up view engine
configViewEngine(app);

//init Webrouter
initWebRouter(app);

app.listen(port, () => {
  console.log("Successfully ! , Trang chủ sẽ mở trong giây lát ......");
});

// connection();
