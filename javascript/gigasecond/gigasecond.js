export const gigasecond = (date) => {
  const gigasecondToMilisecond = (10 ** 9) * 1000;

  return new Date(date.getTime() + gigasecondToMilisecond);
};