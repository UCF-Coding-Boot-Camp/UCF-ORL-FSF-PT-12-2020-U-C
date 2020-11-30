module.exports = (array) => {

    // Finds the index of the .DS_Store
    let DS_Store = array.indexOf(".DS_Store");

    // If .DS_Store exist it will go into the if statement
    if (DS_Store >= 0) {

        // Splice out the the .DS_Store
        // This will not removing it for the actual folder
        // Just out of the array that holds the folder names
        array.splice(DS_Store, 1);

    }

    // Returns the array of the folder names
    return array;

}