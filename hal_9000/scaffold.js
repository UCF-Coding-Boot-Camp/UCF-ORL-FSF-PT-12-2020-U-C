// Node Packages
const shell = require("shelljs");

// Takes in the desire week number
// Destination path
// and whether or not it is FT or PT class
module.exports = (weekNumber, dest, classType) => {

    // Moves the path to the destination 
    shell.cd(dest);

    // Debugging 
    shell.exec("pwd");

    // If statement will add a zero or not
    if (weekNumber >= 10) {

        // Holds the new folder and concatenates it
        // EG - 10-week 
        let newFolder = weekNumber + "-week";

        // Makes the folder
        shell.mkdir(newFolder);
        // cd into the new folder
        shell.cd(newFolder);

    } else {

        // Holds the new folder and concatenates it
        // EG - 09-week 
        let newFolder = "0" + weekNumber + "-week";

        // Makes the folder
        shell.mkdir(newFolder);
        // cd into the new folder
        shell.cd(newFolder);

    }

    // If it is a FT class we need 5 folders for each day
    // If it is a PT class we need 3 folders for each day
    if (classType == "Full-Time") {

        // For loop goes 5 times
        for (let i = 1; i <= 5; i++) {

            // Makes the new folder
            // EG 1.1
            shell.mkdir(weekNumber + "." + i);

            // cd into the new folders
            shell.cd(weekNumber + "." + i);

            // Puts a .gitkeep so git will track
            // This is necessary because git does NOT track empty folders
            shell.touch(".gitkeep");

            // cd up a folder and we go again
            shell.cd("..");

        }

    } else {

        // For loop goes 3 times
        for (let i = 1; i <= 3; i++) {

            // Makes the new folder
            // EG 1.1
            shell.mkdir(weekNumber + "." + i);

            // cd into the new folders
            shell.cd(weekNumber + "." + i);

            // Puts a .gitkeep so git will track
            // This is necessary because git does NOT track empty folders
            shell.touch(".gitkeep");

            // cd up a folder and we go again
            shell.cd("..");

        }

    }

}