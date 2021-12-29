// Markup Data
const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  'partly-cloudy': { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

// Date Services
const daysOfWeekMap = {
  0: 'SUN',
  1: 'MON',
  2: 'TUES',
  3: 'WED',
  4: 'THUR',
  5: 'FRI',
  6: 'SAT',
};

const date = new Date();

function addDay(date, days) {
  const tempDate = date;
  tempDate.setDate(tempDate.getDate() + days);
  return tempDate;
}

// Location Services
// let coords;
// function locationSuccess(position) {
//   coords = position.coords;
// }
function locationError(error) {
  console.warn(`ERROR(${error.code}): ${error.message}`);
  alert('Allow location permission to retrieve local weather.');
}
const locationOptions = {
  timeout: 5000,
  maximumAge: 1000,
};
function getLocation() {
  if (navigator.geolocation) {
    return new Promise((res) => {
      navigator.geolocation.getCurrentPosition(
        res,
        locationError,
        locationOptions
      );
    });

    // navigator.geolocation.getCurrentPosition(
    //   locationSuccess, locationError, locationOptions
    // );
  }
}

async function testGetLocationWeather() {
  const position = await getLocation();
  console.log(position);

  const weather = await getWeather(position);
  console.log(weather);
}
testGetLocationWeather();

// Weather Services
async function getWeather(position) {
  const openWeatherKey = '0bb338e53966913f3a5d9c70366f0e35'; // Fill in: https://openweathermap.org/
  const openWeatherUrl = new URL(
    'https://api.openweathermap.org/data/2.5/onecall'
  );
  const openWeatherParams = new URLSearchParams({
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    exclude: ['current', 'minutely', 'hourly', 'alerts'],
    units: 'imperial',
    appid: openWeatherKey,
  }).toString();
  openWeatherUrl.search = openWeatherParams;

  const openWeatherRes = await fetch(openWeatherUrl);

  if (!openWeatherRes.ok) throw openWeatherRes.json();

  return await openWeatherRes.json();
}
