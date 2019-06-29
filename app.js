const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const cityName = process.argv[2];
if (cityName) {
    geocode(cityName, (error, {latitude,longitude,location}) => {
        if (!error) {
            forecast(latitude, longitude, (error, data) => {
                if (!error) {
                    console.log(data);
                } else {
                    console.log('Error fetching forecast');
                }
            })
        } else {
            console.log('Location fetching error');
        }
    });
} else {
    console.log('Please provide the city name')
}