import { Coach } from "./Coache";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoah = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches.... 

let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoah);
theCoaches.push(myGolfCoach);

for(let tempCoache of theCoaches ) {
    console.log(tempCoache.getDailyWorkout());
}