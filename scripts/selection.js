async function selection() {
    const ele = document.querySelectorAll(".sort");
    
    // Updating time complexities for Selection Sort
    document.getElementById("Time_Worst").innerHTML = "O(N<sup>2</sup>)";
    document.getElementById("Time_Average").innerHTML = "&Theta;(N<sup>2</sup>)";
    document.getElementById("Time_Best").innerHTML = "&Omega;(N<sup>2</sup>)";  // Correct: best case is also O(N^2)

    // Setting Space complexity (constant space)
    document.getElementById("Space_Worst").innerText = "O(1)";

    // Main logic for selection sort
    for (let i = 0; i < ele.length; i++) {
        let minIndex = i;  // Assume the current element is the minimum
        ele[i].style.background = 'red';  // Color the current index in red

        // Find the minimum element in the unsorted part of the array
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = 'red';  // Compare the current element in red

            if (parseInt(ele[j].style.height) < parseInt(ele[minIndex].style.height)) {
                if (minIndex !== i) {
                    ele[minIndex].style.background = 'yellow';  // Reset the previous minIndex to yellow
                }
                minIndex = j;  // Update the new minimum index
            } else {
                ele[j].style.background = 'yellow';  // Reset non-min elements to yellow
            }
        }

        // Wait before swapping to create a smooth animation
        await delay(time);

        // Swap the found minimum element with the first element of the unsorted subarray
        swap(ele[i], ele[minIndex]);

        // Reset the colors
        ele[minIndex].style.background = 'yellow';  // Reset the previous min element color
        ele[i].style.background = 'green';  // Mark the sorted element in green
    }
}

// Delay function to control the speed of sorting animation
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to swap the heights of two elements
function swap(el1, el2) {
    let tempHeight = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = tempHeight;
}

// Add event listener for selection sort button
document.getElementById("selection").addEventListener('click', async function() {
    disableSizeSlider();
    disableSortingBtn();
    await selection();
    enableSizeSlider();
    enableSortingBtn();
});
