async function insertion() {
    const ele = document.querySelectorAll('.sort');
    
    // Set time complexity values for insertion sort (use innerHTML consistently)
    document.getElementById("Time_Worst").innerHTML = "O(N<sup>2</sup>)";
    document.getElementById("Time_Average").innerHTML = "&Theta;(N<sup>2</sup>)";  
    document.getElementById("Time_Best").innerHTML = "&Omega;(N)";

    // Set space complexity for insertion sort
    document.getElementById("Space_Worst").innerText = "O(1)";

    ele[0].style.background = '#47ff41ea'; // Mark the first bar as sorted
    for (let i = 1; i < ele.length; i++) {
        ele[i].style.background = 'red';
        let key = ele[i].style.height;
        let j = i - 1;

        // Move elements of the sorted part one by one ahead if they are greater than the key
        while (j >= 0 && (parseInt(key) < parseInt(ele[j].style.height))) {
            ele[j].style.background = 'red';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await delay(time); // Add delay for visualization
            
            // Mark the elements as sorted
            for (let k = 0; k < i; k++) {
                ele[k].style.background = '#47ff41ea';
            }
        }

        ele[j + 1].style.height = key; // Insert the key in its correct position
        ele[i].style.background = '#47ff41ea'; // Mark the element as sorted
    }
}

document.getElementById('insertion').addEventListener('click', async function() {
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableSizeSlider();
    enableSortingBtn();
});
