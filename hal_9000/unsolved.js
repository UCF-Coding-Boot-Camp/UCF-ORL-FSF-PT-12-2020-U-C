// Node Modules 
const shell    = require("shelljs");

module.exports = (activities, unit, source, copyPath) => {

    // Declare an empty array that will holder the activities 
    let holderAct = [];

    let gitkeep = copyPath + ".gitkeep";

    console.log(gitkeep);

    shell.rm("-f", gitkeep);

    // For will create the paths of the activities
    for (let i = 0; i < activities.length; i++) {

        // Takes the source puts the unit then the 01-activities and then activities names
        holderAct.push(source + "/" + unit + "/01-Activities/" + activities[i]);

    }

    // For will do the copying 
    // It is all been building to this
    for (let i = 0; i < holderAct.length; i++) {

        // solved will hold the copyPath with the solved 
        let solved = copyPath + activities[i] + "/Solved";

        // This will copy the selected FSF activities to the destination path
        shell.cp("-r", holderAct[i], copyPath + activities[i]);

        // Removing the .gitkeep because it is not needed with files in the folder
        shell.rm("-f", ".gitkeep");

        // Removed the solved folder
        // Don't want to make it too easy do we?
        shell.rm("-rf", solved);

    }

}
