// Node Modules
const shell    = require("shelljs");
const fs       = require('fs');

module.exports = (activities, unit, source, copyPath) => {

    // Declare an empty array that will holder the activities 
    let holderAct = [];

    // For will create the paths of the activities
    for (let i = 0; i < activities.length; i++) {

        // Takes the source puts the unit then the 01-activities and then activities names
        holderAct.push(source + "/" + unit + "/01-Activities/" + activities[i]);

    }

    // For will do the copying 
    // It is all been building to this
    for (let i = 0; i < holderAct.length; i++) {

        // solved will hold the copyPath with the solved 
        let solved = holderAct[i] + "/Solved";

        // If the solved folder exist then
        if (fs.existsSync(solved)) {

            // It will copy it to the activities
            shell.cp("-r", holderAct[i] + "/Solved", copyPath + activities[i]);

        } 

    }
}
