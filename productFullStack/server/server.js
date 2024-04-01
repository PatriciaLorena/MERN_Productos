const express = require("express");
const cors = require("cors");
const app = express();
const port = 80;

app.use(cors());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongose.config");

const ProductRouter = require("./routes/product.routes");
app.use("/api/product", ProductRouter);

app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`)); 