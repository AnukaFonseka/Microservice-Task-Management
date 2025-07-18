const express = require('express');
const app = express();
const cors = require("cors");
const dotEnv = require("dotenv")

const swaggerUi = require('swagger-ui-express');
const YAML = require("yamljs");

dotEnv.config()

const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || " 44.208.32.102"
app.use(express.json());
app.use(cors());

const db = require("./models");

// Swagger setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Routers
const routes = require("./routes/index.routes");
app.use("/", routes);

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log("Employee service running on http://localhost:3002");
        console.log("Swagger docs available at http://localhost:3002/api-docs");
    });

    
})