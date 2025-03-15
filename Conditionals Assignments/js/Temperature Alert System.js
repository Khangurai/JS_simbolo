function TempAlert(temp) {
  console.log(`Current Temp : ${temp}C`);
  if (18 < temp < 25) {
    console.log("Temperature is just normal.\n");
  } else if (temp < 18) {
    console.log("Temperature is too Low.\n");
  } else if (temp > 25) {
    console.log("Temperature is too High.\n");
  } else {
    return;
  }
}

TempAlert(19);
TempAlert(12);
TempAlert(30);