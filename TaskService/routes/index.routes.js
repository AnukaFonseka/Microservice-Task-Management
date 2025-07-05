const express = require("express");

const taskRoutes = require("./task.routes");


function routes() {

    const router = express.Router();
    
    router.use("/tasks", taskRoutes); 

    return router;
}

module.exports = routes();