// Function to Append faceValue amount of circles to the square
genCircle = function(i, faceValue){
    //Array that stores which rows should be used depending on face value:
    let rowsArr = ["N/A", "2","3,1","3,2,1","1,3,1,3","1,1,2,3,3","1,2,3,1,2,3"];

    //Array that stores which cols should be used depending on face value:
    let colsArr = ["N/A","2","1,3","1,2,3","1,1,3,3","1,3,2,1,3","1,1,1,3,3,3"];

    for(let j = 0; j < faceValue; j++){
        // Get rows and cols to use for circle position based off of faceValue
        let rows = rowsArr[faceValue].split(",");
        let cols = colsArr[faceValue].split(",");

        // Initialize circle div
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.gridRow = rows[j];
        circle.style.gridColumn = cols[j];

        // Append circle to square based off current i for ID
        document.getElementById(`square-${i}`).appendChild(circle);
    }
}

// Function to remove all circles and squares when user wants to generate more die (based off some random stack overflow post)
delDie = function(){
    const square = document.getElementsByClassName("square");
    const circle = document.getElementsByClassName("circle");
    if(square.length == 0){
        return 0;
    }   
    while(square.length > 0){
        square[0].parentNode.removeChild(square[0]);
    }
    while(circle.length > 0){
        circle[0].parentNode.removeChild(length[0]);
    }
}

// Submit button clicked deletes previous die, generates the face values, and creates the squares, along with calling genCricle
document.getElementById("submit").onclick = function(){
    //Delete previous die
    delDie();

    // Get number of die to generate
    let numDie = document.getElementById("numDie").value;

    // Create the sqaure border for each die and put the face value within the square
    for(let i = 0; i < numDie; i++){
        // Initialize square div
        const square = document.createElement("div");
        square.className = "square";
        square.id = `square-${i}`
        
        // Append square div to dieContainer
        document.getElementById("dieContainer").appendChild(square);
        
        // Generate face value
        faceValue = Math.round((Math.random() * 5 + 1));

        // Append faceValue amount of circles to the square
        genCircle(i, faceValue);
    }
}