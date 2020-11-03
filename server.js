// create an express app
const express = require("express")
const app = express();
const Analytics = require('analytics-node');

// https://segment.com/docs/connections/sources/catalog/libraries/server/node/quickstart/
// initialize with our Segment write key
const analytics = new Analytics('37ZPGCCCslQLfvepLtkAqj2yFtvT9fdD');

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/api-request", function (req, res) {
  res.send(JSON.stringify({ status: 'success' }));
});

// start the server listening for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running at https://localhost:${port}...`));
