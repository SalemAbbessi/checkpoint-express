const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour < 17) {
      next(); // Continue to the next middleware or route handler
    } else {
      res.status(403).send('Access forbidden outside working hours (Monday to Friday, from 9 to 17).');
    }
  };
  
  module.exports = { checkWorkingHours };