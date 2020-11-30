const fs = require('fs');
const inquirer = require('inquirer');
const jsonfile = require('jsonfile');
const unsolvedSetup = require("./unsolved");
const rmDS_Store = require("./rm_ds_Store");
const scaffold = require("./scaffold");
const solvedSetup = require("./solved");

// File will how the userPaths.json file in the root directory
const file = "./userPaths.json";

const starter = () => {

    // pathsJSON will hold the object of the user paths and whether FT or PT class
    const pathsJSON = jsonfile.readFileSync("./userPaths.json");

    // These variables split up the object for easier use
    const source = pathsJSON.source;
    const dest = pathsJSON.dest;
    const classType = pathsJSON.classType;

    // Temp variable that will hold the user choice
    let userChoice = 0;
    
    // Will ask the user what he/she wants to do
    inquirer.prompt([
    {
        type: 'list',
        name: 'user',
        message: 'What would you like me to build?',
        choices: [
        'Week Structure',
        'Unsolved',
        'Solved'
        ]
    }
    ]).then((answers) => {
    
        // Switch will guide the user choice
        switch(answers.user){

            // This will scaffold out the one week
            case "Week Structure":

                const questions = [
                    {
                        type: 'input',
                        name: 'weekNumber',
                        message: 'What is the week number?'
                    }
                ];

                inquirer.prompt(questions).then((answers) => {
                    
                    // Holds the number of the week
                    let weekNumber = answers.weekNumber;

                    // Will go to the import function scaffold
                    scaffold(weekNumber, dest, classType);

                });
                
                break;

            // Will start the progress on copying unsolved
            case "Unsolved": 

                // Temp variable is now 1 
                userChoice = 1;

                // Function in the this file will start the progress
                setup(userChoice, source, dest);

                break;

            case "Solved":

                // Temp variable is now 2
                userChoice = 2;

                // Function in the this file will start the progress
                setup(userChoice, source, dest);

                break;

        }

    });

}

// Main function for the copying
// Then way didn't you call it copying instead setup
// Shut Up
const setup = (userChoice, source, dest) => {

    // tempUnits will hold all the folders name in the FSF repo
    // in the 01-Class-Content folder
    let tempUnits = fs.readdirSync(source);
    
    // Calls an imported function
    // Removes the evil DS.Store for the folder so it is not shown to the user
    let units = rmDS_Store(tempUnits);
    
    // Finds the index of 00-lesson-plan-development-guidelines
    let guidelines = units.indexOf("00-lesson-plan-development-guidelines");
    
    // Removes it from the array
    // This will not removing it for the actual folder
    // Just out of the array that holds the folder names
    units.splice(guidelines, 1);


    // HOLD ON TO YOUR BUTTS!!!!
    // HERE COMES A WATERFALL OF INQUIRERS 

    // The point of these inquirers is to find out what the user wants to 
    // copy and where the user wants the copied folders/files to go

    // This inquirer will be a list of the folders of the units names
    // EG 01-html-git-css | 02-css-bootstrap | 03-javascript and so on
    inquirer.prompt([
        {
          type: 'list',
          name: 'unitSelect',
          message: 'Select the Unit for the activities you want to copy over?',
          choices: 
              units
        }
      ]).then((answers) => {

        // The user has selected the unit he/she want to copy
        // and is stored here
        let unitSelect = answers.unitSelect;
        
        // tempActivities will read the folder inside the selected unit 
        // EG if the user selected 03-javascript it would hold
        // 00-Bootswatch | 01-CodeDissection | 02-BasicVariablesDemo and so on
        let tempActivities = fs.readdirSync(source + "/" + unitSelect + '/01-Activities/');
        
        // If there is a DS_Store, removes it for the array of folder names
        // Side Note - I know why you, Mac, makes this file but I still hate you for it
        let activities = rmDS_Store(tempActivities);

        // This inquirer will be a list of the folders inside the selected unit folder
        // It will be a checkbox format meaning the user can select multiple folders
        inquirer.prompt([
            {
                type: 'checkbox',
                message: 'Select Activities you want to copy over?',
                name: 'chosenAct',
                choices: 
                    activities
            }
            ]).then((answers) => {

                // weekNum will read the destination 01-Class-Content 
                // EG - 01-week | 02-week | 03-week
                let weekNum = fs.readdirSync(dest);
                
                // Will remove the DS_Store from the array
                rmDS_Store(weekNum);
                
                // This inquirer will allow the choose the folder in the dest to go
                inquirer.prompt({
                    type: 'list',
                    name: 'weekNum',
                    message: 'Choose your unit number',
                    choices: weekNum
                }).then((answerWeek) => {
        
                    // unitNum will hold the chosen folder and will concat it to weekNum
                    let unitNum = fs.readdirSync(dest + "/" + answerWeek.weekNum);
 
                    // Will remove the DS_Store from the array       
                    rmDS_Store(unitNum)
        
                    // This inquirer will allow the choose the folder in the dest to go
                    inquirer.prompt({
                    type: 'list',
                    name: 'unitNum',
                    message: 'Choose the week\'s unit number',
                    choices: unitNum
                    }).then((answerUnit) => {
        
                        // copyPath will hold the chosen folder and will concat withe week number and unit number
                        var copyPath = dest + "/" + answerWeek.weekNum + "/" + answerUnit.unitNum + "/";

                        // activities will hold the chosen activities that the user wants to copy over
                        let activities = answers.chosenAct;
        
                        // The point of the temp variable is help choose want function to run
                        if (userChoice == 1){
                            
                            // Calls the an import function unsolvedSetup 
                            unsolvedSetup(activities , unitSelect, source, copyPath); 
                    
                        } else {
                
                            // Calls the an import function solvedSetup
                            solvedSetup(activities , unitSelect, source, copyPath)
                
                        }
        
                    });
                });
    
            });

      });

}

// This will make the userPaths.json file
// Instead of having the user make the paths every time 
// It is best to store it once
if(fs.existsSync("./userPaths.json")){
    
    // If the file already exist then just start so starter
    starter();

} else {

    // Array of Objects
    // Holds the questions need to make the userPaths.json
    const questions = [
    {
        type: 'input',
        name: 'source',
        message: 'What is the path of FSF 01-Class-Content'
    },
    {
        type: 'input',
        name: 'dest',
        message: 'What is the path of the cohort 01-Class-Content'
    },
    {
        type: 'list',
        name: 'classType',
        message: 'Are you in a full-time or part-time?',
        choices: ["Full-Time" , "Part-Time"]
    }
    ];

    inquirer.prompt(questions).then((answers) => {

        // jsonfile will make a json file
        jsonfile.writeFile(file, answers, (err) => {
            if (err) {
                console.error(err);
            }

            // Okay now that is done lets start this beast
            starter();

        })

    });

}
