const db = require('../config/connection');
const { User, Service, Appointment, Review, Tag } = require('../models');
const userData = require('./userData.json');
const serviceData = require('./serviceData.json');
const cleanDB = require('./cleanDb');

db.once('open', async () => {
  try {
  	// Clear records from existing collections
    // await cleanDB('User', 'users');
    // await cleanDB('Service', 'services');
    // await cleanDB('Appointment', 'appointments');
    // await cleanDB('Review', 'reviews');
    // await cleanDB('Tag', 'tags');

    // // Begin seeding the database
    // await User.create(userData);
    // await Service.create(serviceData);

    // // Retrieve 
    // const nonArtistUsers = await User.find({ artist: false });
    // const artistUser = await User.find({ artist: true })
    // // console.log(`nonArtistUsers: ${nonArtistUsers}`);
    // // console.log(`artistUser: ${artistUser}`);

    // const services = await Service.find();
    // // console.log(services)

    // // Scheduling appointments
    // await Appointment.insertMany([
    // 	{
    // 		user: nonArtistUsers[0]['_id'],
    // 		services: [services[0]['_id'], services[1]['_id']],
    // 		apptDate: new Date('2024-05-05T09:30:00-05:00'),
    // 		requests: "Would like to get red nail polish",
    // 		completed: true,
    // 		artist: artistUser[0]['_id']
    // 	},
    // 	{
    // 		user: nonArtistUsers[1]['_id'],
    // 		services: [services[2]['_id']],
    // 		apptDate: new Date('2024-07-04T09:30:00-05:00'),
    // 		completed: false,
    // 		artist: artistUser[0]['_id']
    // 	},
    // 	{
    // 		user: nonArtistUsers[2]['_id'],
    // 		services: [services[0]['_id'], services[2]['_id']],
    // 		apptDate: new Date('2024-06-13T09:30:00-05:00'),
    // 		completed: false,
    // 		artist: artistUser[0]['_id']
    // 	},
    // 	{
    // 		user: nonArtistUsers[0]['_id'],
    // 		services: [services[2]['_id']],
    // 		apptDate: new Date('2024-06-05T09:30:00-05:00'),
    // 		requests: 'Coming in for a touchup',
    // 		completed: false,
    // 		artist: artistUser[0]['_id']
    // 	}
    // 	]);

    // Appointments are NOT automatically populated within the parent User records
    const storedAppointments = await Appointment.find();
    // console.log(storedAppointments);
    await storedAppointments.map(async (appointment) => {
    	// Update the user's appointments array
    	// console.log(appointment.user)
      // console.log(typeof appointment.user.toString())

      const userId = appointment.user.toString();
      const artistId = appointment.artist.toString();
      const testUser = await User.find({_id : appointment.user})
      console.log(testUser)
      // console.log('after appointment')
      // const retrievedUser =  User.find({ _id: '664ea00512c9dd7c4eb4ee4f' });
      //console.log(retrievedUser)
    	// const updatedUser =  User.findByIdAndUpdate(appointment.user,
    	// 	{ $push: { appointments : appointment._id} },
    	// 	{ new: true }
    	// 	);
    	// // console.log(`updatedUser: ${updatedUser}`);
    	// // Update the artist's appointments array
    	// const updatedArtist =  User.findByIdAndUpdate(appointment.artist,
    	// 	{ $addToSet: { appointments : appointment} },
    	// 	{ new: true, runValidators: true }
    	// 	);
    	// // console.log(`updatedArtist: ${updatedArtist}`)
    })

    // Unsure why, but having a query outside of the map function allows the query inside of the map function to execute 
    const outsideMapUser = await User.find()
    console.log("******* OUTSIDE ********")
    console.log(outsideMapUser);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

