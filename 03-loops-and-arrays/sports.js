var sportOne = ["Golf", "Cricket", "Tennis", "Cricket"];
// Let's use the simplied for loop
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My Faviourat!");
    }
    else {
        console.log(tempSport);
    }
}
