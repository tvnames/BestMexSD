const sequelize = require('../config/connection');
const { User } = require('../models');

const seedUsers = require('./usersseeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUsers(User);
    console.log('/n-----------Users Seeded--------');

    process.exit(0);

};

seedDatabase();
