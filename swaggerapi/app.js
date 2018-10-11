"use strict";

const app = require("express")();
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');
const swaggerTools = require("swagger-tools");
const YAML = require("yamljs");
const auth = require("./api/helpers/auth");
const swaggerConfig = YAML.load("./api/swagger/swagger.yaml");
const allowedOrigins = require('./config/allowedOrigins')
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

require('./config/db')

swaggerTools.initializeMiddleware(swaggerConfig, function(middleware) {
  //Serves the Swagger UI on /docs
  app.use(middleware.swaggerMetadata()); // needs to go BEFORE swaggerSecurity
  
  // setup the logger
  app.use(morgan('combined', { stream: accessLogStream }))
  
  app.use(
    middleware.swaggerSecurity({
      //manage token function in the 'auth' module
      Bearer: auth.verifyToken
    })
  );

  app.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));
  
  const routerConfig = {
    controllers: "./api/controllers",
    useStubs: false
  };

  app.use(middleware.swaggerRouter(routerConfig));

  app.use(middleware.swaggerUi());
  
  app.listen(3000, function() {
    console.log("Started server on port 3000");
  });
});
