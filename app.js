let raceNumber = Math.floor(Math.random()*1000);

let early = true;

let runnerAge = 18;

if (runnerAge >= 18 && early) {

    raceNumber += 1000;
    }
if (runnerAge >= 18 && early) {

    console.log(`You are race at 9:30 AM with Race Number = ${raceNumber}`);

} else if (runnerAge >= 18 && !early) {

    console.log(`You are race at 11:00 AM with Race Number = ${raceNumber}`);

} else if (runnerAge < 18) {

    console.log(`You are race at 12:30 PM with Race Number = ${raceNumber}`);

}