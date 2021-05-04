const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 5;
      break;
    default:
      return `Please check your input`;
      break;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours *= 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`You've got the perfect amount of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Wow, Sleeping Beauty! You've got ${actualSleepHours - idealSleepHours} more sleep hour(s) than needed!`);
  } else {
    console.log(`Well, looks like you need ${idealSleepHours - actualSleepHours} more hour(s) to sleep to get in shape. Get some rest!`);
  }
}

calculateSleepDebt();

/*Extra practice 
const getActualSleepHours = () => 6 + 8 + 7 + 8 + 5 + 10 + 4;
console.log(getActualSleepHours()); 

const getIdealSleepHours = idealSleepHours => idealSleepHours * 7;
console.log(getIdealSleepHours(9));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) {
    console.log(`You've got the perfect amount of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`Wow, Sleeping Beauty! You've got ${actualSleepHours - idealSleepHours} more sleep hour(s) than needed!`);
  } else {
    console.log(`Well, looks like you need ${idealSleepHours - actualSleepHours} more hour(s) to sleep to get in shape. Get some rest!`);
  }
} */

