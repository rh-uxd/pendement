// create an express app
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Analytics = require("analytics-node");

// https://segment.com/docs/connections/sources/catalog/libraries/server/node/quickstart/
// initialize with our Segment write key
const analytics = new Analytics("37ZPGCCCslQLfvepLtkAqj2yFtvT9fdD");

// track users in memory to know whether they are new or pre-existing
const allUsers = {};

// Configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use the express-static middleware
app.use(express.static("public"));

function createUser(id) {
  if (allUsers[id]) {
    console.log(
      `existing id: ${id}, name: ${allUsers[id].name}, email: ${allUsers[id].email}`
    );
    return "existing";
  } else {
    const idCapitalized = id.charAt(0).toUpperCase() + id.slice(1);
    const name = `${idCapitalized} Smith`;
    const email = `${id}@example.com`;
    /*
      identify lets you tie a user to their actions and record traits about them. 
      It includes a unique User ID and/or anonymous ID, and any optional traits you know about them.
      You should call identify once when the user’s account is first created, and then again any time their traits change.
      */
    analytics.identify({
      userId: id,
      traits: {
        id,
        name,
        email,
      },
    });
    allUsers[id] = {
      id,
      name,
      email,
    };
    console.log(`new id: ${id}, name: ${name}, email: ${email}`);
    return "new";
  }
}

// POST method route
app.post("/api/login", function (req, res) {
  const { username } = req.body;
  const type = createUser(username);
  analytics.track({
    userId: username,
    event: "Login",
  });
  res.json({
    id: username,
    name: allUsers[username].name,
    email: allUsers[username].email,
    type,
  });
});

// http://localhost:3000/api/create/?id=user1
app.get("/api/create", function (req, res) {
  const id = req.query.id;
  const type = createUser(id);
  res.json({
    id,
    name: allUsers[id].name,
    email: allUsers[id].email,
    type,
  });
});

// http://localhost:3000/api/track/?id=user1&event=login
app.get("/api/track", function (req, res) {
  const id = req.query.id;
  const event = req.query.event;
  /*
    track lets you record the actions your users perform. Every action triggers what we call an “event”, 
    which can also have associated properties.
    You’ll want to track events that are indicators of success for your site, like Signed Up, Item Purchased or Article Bookmarked.
    */
  analytics.track({
    userId: id,
    event,
  });
  res.send(`track id: ${id}, event: ${event}`);
});

// start the server listening for requests
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is running at https://localhost:${port}...`)
);
