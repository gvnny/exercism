export const age = (planet, secondsOfLife) => {
  
  const periodOrbital = {
    'mercury' : 0.2408467,
    'venus' : 0.61519726,
    'earth' : 1.0,
    'mars' : 1.8808158,
    'jupiter' : 11.862615,
    'saturn' : 29.447498,
    'uranus' : 84.016846,
    'neptune' : 164.79132,
  }

  let result = secondsOfLife / (periodOrbital[planet] * 365.25) / 24 / 60 / 60;

  return Math.round(result * 100) / 100;
};