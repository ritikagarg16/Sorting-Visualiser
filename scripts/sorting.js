let arrsizer=document.querySelector('#sizer');
arrsizer.addEventListener('input', function(){
    generateBars(parseInt(arrsizer.value))});
generateBars();// if no value is passed then this function will be called

let time=100;// specifies the delay(initially set to 100)
let sortspeed=document.querySelector('#speed');
sortspeed.addEventListener('input',function(){
    time=345-parseInt(sortspeed.value);// time = 345 - 5 = 240 ms  
    //5 is the slider value and we have given 345 so that it never goes to zero even when slider is at minimum.
});
function generateBars(noBar = 60) {
    document.getElementById("bar").innerHTML = '';  // Clear the previous bars
    let bars = [];

    // Generate random heights for bars
    for (let i = 0; i < noBar; i++) {
        bars.push(Math.floor(Math.random() * 300) + 1);
    }

    const container = document.querySelector('#bar'); // Select the bar container

    // Calculate the width for each bar
    let containerWidth = container.offsetWidth; // Get the width of the container
    let barWidth = containerWidth / noBar - 2;  // Width of each bar, accounting for spacing

    // Generate bars and adjust their width dynamically
    for (let x = 0; x < noBar; x++) {
        const temp = document.createElement("div");  // Create a new div for each bar
        temp.classList.add('sort', 'baritem');  // Add classes for styling
        
        temp.style.height = bars[x] + "px";     // Set the height of the bar
        temp.style.width = barWidth + "px";     // Set the width dynamically based on number of bars
        temp.style.margin = "0 1px";            // Add a small margin between bars (optional)
        
        container.append(temp);  // Append the bar to the container
    }
}

/*function generateBars(noBar=60){//initailly 60 bars is given by default
document.getElementById("bar").innerHTML='';//innerhtml is 0 to reset any previous bar values
let bars=[]; //array is initialised
for(let i=0; i<noBar; i++)
{
    bars.push(Math.floor(Math.random()*400)+1);//random number between 1 and 400 is genrated and pushed into array
}

const divs=document.querySelector('#bar');

for(let x=0; x<noBar; x++)
 {
    const temp=document.createElement("div");// new div for each bar
    temp.classList.add('sort');// adding there two classes to baritems
    temp.classList.add('baritem');
    temp.style.height=bars[x]+"px";// setting heights of the bar
    divs.append(temp); // add the bars visually
 }
 
}
*/

//generate new set of array
document.getElementById("newarr").addEventListener("click",function(){//when button is clicked do the following functions
    generateBars(arrsizer.value);
    enableSortingBtn();
    enableSizeSlider();
});
// fucntion for swaping bars as per algo
function swap(ele1, ele2)//swapping height of two selected elements
{
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;
}
//causes delay in swapping
function delay(milisec) { 
    return new Promise(resolve => { //timeout is a js function which executes a block of code after a specified delay (in milliseconds)
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function disableSortingBtn(){
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
    document.querySelector("#selection").disabled = true;
    document.querySelector("#heap").disabled = true;
}

function enableSortingBtn(){
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
    document.querySelector("#selection").disabled = false;
    document.querySelector("#heap").disabled = false;
}

function disableSizeSlider(){
    document.getElementById("sizer").disabled = true;
}

function enableSizeSlider(){
    document.getElementById("sizer").disabled = false;
}