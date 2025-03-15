function SpeedingTicketChecker(speed) {
  let speedLimit =
    speed > 60
      ? `Warning! Your Speed: ${speed}mph.\nThis is your Speeding Ticket.\n`
      : `You're Safe! Your Speed : ${speed}.\n`;
   console.log(speedLimit)
}

SpeedingTicketChecker(75);
SpeedingTicketChecker(100);
SpeedingTicketChecker(20);
SpeedingTicketChecker(30);