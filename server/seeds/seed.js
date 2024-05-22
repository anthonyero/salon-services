const db = require('../config/connection');
const { User, Service, Appointment, Review, Tag } = require('../models');
const userData = require('./userData.json');
const serviceData = require('./serviceData.json');
const cleanDB = require('./cleanDb');

db.once('open', async () => {
  try {
  	// Clear records from existing collections
    await cleanDB('User', 'users');
    await cleanDB('Service', 'services');
    await cleanDB('Appointment', 'appointments');
    await cleanDB('Review', 'reviews');
    await cleanDB('Tag', 'tags');

    // Begin seeding the database
    await User.create(userData);
    await Service.create(serviceData);

    // Retrieve 
    const nonArtistUsers = await User.find({ artist: false });
    const artistUser = await User.find({ artist: true })
    console.log(`nonArtistUsers: ${nonArtistUsers}`);
    console.log(`typeof nonArtistUsers: ${typeof nonArtistUsers}`)
    console.log(`artistUser: ${artistUser}`);

    const services = await Service.find();
    console.log(services)
    


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

