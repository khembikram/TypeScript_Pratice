import { Coach } from "./Coache";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "Hit 100 Golf at the Golf ring";
    }
}