// Markup data
const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  'partly-cloudy': { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

// Date services
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
