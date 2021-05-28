const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bestmexsd", {
  useNewUrlParser: true,
});

const User = [
  {
    username: [
      {
        username: "Ben Hurr",
        email: "bh@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Mary Swanson",
        email: "ms@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Terry Cruz",
        email: "tc@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Matthew Damon",
        email: "md@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Harry Dunn",
        email: "hd@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Lloyd Christmas",
        email: "lc@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Sarah Plant",
        email: "sp@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Brad Red",
        email: "br@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Mary Wang",
        email: "mw@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Steve Johnson",
        email: "sj@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Ryan Nichols",
        email: "rn@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Thomas Anderson",
        email: "ta@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Will Adams",
        email: "wa@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Katt Williams",
        email: "kw@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Stacy Lee",
        email: "sl@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Amanda Chan",
        email: "ac@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Joe Smith",
        email: "js@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Tom Jones",
        email: "tj@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Mike Jones",
        email: "mj@email.com",
        password: "password",
      },
    ],
  },
  {
    username: [
      {
        username: "Ben Dover",
        email: "bd@email.com",
        password: "password",
      },
    ],
  },
];
module.exports = User;
