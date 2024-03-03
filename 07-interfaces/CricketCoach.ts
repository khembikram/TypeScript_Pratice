import { Coach } from "./Coache";

export class CricketCoach implements Coach {
    getDailyWorkout(): string {
        return "Pratice your spin bowling technique";
    }
}