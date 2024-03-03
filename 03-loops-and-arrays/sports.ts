let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Cricket"];
// Let's use the simplied for loop

for(let tempSport of sportOne ) {

    if(tempSport == "Cricket"){
        console.log(tempSport + "<< My Faviourat!")
    }
    else {
        console.log(tempSport);
    }
}