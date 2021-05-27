const { User } = require('../models');

const userData = [
    {
        username: 'james',
        email: 'james@email.com',
        password: 'password',
    },
    {
        username: 'karen',
        email: 'karen@email.com',
        password: 'password',
    },
    {
        username: 'sonny',
        email: 'sonny@email.com',
        password: 'password',
    },
    {
        username: 'harry',
        email: 'harry@email.com',
        password: 'password',
    },
    {
        username: 'shaggy',
        email: 'shaggy@email.com',
        password: 'password',
    }
  {
        username: 'ryan',
        email: 'ryan@email.com',
        password: 'password',
    },
    {
        username: 'steve',
        email: 'steve@email.com',
        password: 'password',
    },
    {
        username: 'andrew',
        email: 'andrew@email.com',
        password: 'password',
    },
    {
        username: 'william',
        email: 'william@email.com',
        password: 'password',
    },
    {
        username: 'john',
        email: 'john@email.com',
        password: 'password',
    },
    {
        username: 'mike',
        email: 'mike@email.com',
        password: 'password',
    },
    {
        username: 'edgar',
        email: 'edgar@email.com',
        password: 'password',
    },
    {
        username: 'sarah',
        email: 'sarah@email.com',
        password: 'password',
    },
    {
        username: 'mary',
        email: 'mary@email.com',
        password: 'password',
    },
    {
        username: 'stacy',
        email: 'stacy@email.com',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;
