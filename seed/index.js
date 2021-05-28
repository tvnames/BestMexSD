const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bestmexsd", {
    useNewUrlParser: true,
});

const User = [
    {
        userName: [
            {
                name: "Ben Hurr",
                email: "bh@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Mary Swanson",
                email: "ms@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Terry Cruz",
                email: "tc@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Matthew Damon",
                email: "md@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Harry Dunn",
                email: "hd@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Lloyd Christmas",
                email: "lc@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Sarah Plant",
                email: "sp@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Brad Red",
                email: "br@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Mary Wang",
                email: "mw@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Steve Johnson",
                email: "sj@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Ryan Nichols",
                email: "rn@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Thomas Anderson",
                email: "ta@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Will Adams",
                email: "wa@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Katt Williams",
                email: "kw@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Stacy Lee",
                email: "sl@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Amanda Chan",
                email: "ac@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Joe Smith",
                email: "js@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Tom Jones",
                email: "tj@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Mike Jones",
                email: "mj@email.com",
                password: "password",
            },
        ],
    },
    {
        userName: [
            {
                name: "Ben Dover",
                email: "bd@email.com",
                password: "password",
            },
        ],
    },

]

module.exports = User;