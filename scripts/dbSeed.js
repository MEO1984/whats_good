const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whats_good"
);

const postSeed = [
  {
      topic: "Charlotte",
      body: "is a great place to live",
    date: new Date(Date.now())
  },
  {
    topic: "Cornelius",
    body: "is north of Charlotte",
    date: new Date(Date.now())
  },
  {
    topic: "Raleigh",
    body: "is east of here",
    date: new Date(Date.now())
  },
];

db.newPost
  .remove({})
  .then(() => db.newPost.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });