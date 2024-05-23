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

    // Retrieve each type of user
    const nonArtistUsers = await User.find({ artist: false });
    const artistUser = await User.find({ artist: true });

    // Retrieve services
    const services = await Service.find();

    // Scheduling appointments, passing services as embedded document
    await Appointment.insertMany([
    	{
    		user: nonArtistUsers[0]['_id'],
    		services: [services[0]['_id'], services[1]['_id']],
    		apptDate: new Date('2024-05-05T09:30:00-05:00'),
    		requests: "Would like to get red nail polish",
    		completed: true,
    		artist: artistUser[0]['_id']
    	},
    	{
    		user: nonArtistUsers[1]['_id'],
    		services: [services[2]['_id']],
    		apptDate: new Date('2024-07-04T09:30:00-05:00'),
    		completed: false,
    		artist: artistUser[0]['_id']
    	},
    	{
    		user: nonArtistUsers[2]['_id'],
    		services: [services[0]['_id'], services[2]['_id']],
    		apptDate: new Date('2024-06-13T09:30:00-05:00'),
    		completed: false,
    		artist: artistUser[0]['_id']
    	},
    	{
    		user: nonArtistUsers[0]['_id'],
    		services: [services[2]['_id']],
    		apptDate: new Date('2024-06-05T09:30:00-05:00'),
    		requests: 'Coming in for a touchup',
    		completed: false,
    		artist: artistUser[0]['_id']
    	}
    	]);

    // Appointments are NOT automatically populated within the parent User records
    const storedAppointments = await Appointment.find();
    await storedAppointments.map(async (appointment) => {

      // The returned appointment type has `new objectId('string')` but we need to extract the ID value itself
      const userId = appointment.user.toString();
      const artistId = appointment.artist.toString();
      const appointmentId = appointment._id.toString();
      // console.log(`${userId}, ${artistId}, ${appointmentId}`);

      // Update the user's appointments array
    	const updatedUser = await User.findByIdAndUpdate(userId,
    		{ $push: { appointments : appointmentId} },
    		{ new: true } // Do NOT add `runValidators: true`, will return an invalid query
    		);

    	// console.log(`updatedUser: ${updatedUser}`);
    	// Update the artist's appointments array
    	const updatedArtist = await User.findByIdAndUpdate(artistId,
    		{ $push: { appointments : appointmentId} },
    		{ new: true }
    		);
    	// console.log(`updatedArtist: ${updatedArtist}`)
    });

    // DO NOT DELETE QUERY: Unsure why, but having a query outside of the map function allows the query inside of the map function to execute 
    const outsideMapUser = await User.find()
    // console.log("******* OUTSIDE ********")
    // console.log(outsideMapUser);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

