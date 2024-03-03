"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoah = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches.... 
let theCoaches = [];
theCoaches.push(myCricketCoah);
theCoaches.push(myGolfCoach);
for (let tempCoache of theCoaches) {
    console.log(tempCoache.getDailyWorkout());
}
