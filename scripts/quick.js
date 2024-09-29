async function lomuto(ele, l, h) {
    // Setting Time complexities for quick sort
    document.getElementById("Time_Worst").innerHTML = "O(N<sup>2</sup>)"; // Quick sort worst case (unbalanced)
    document.getElementById("Time_Average").innerHTML = "&Theta;(N log N)";  // Θ (Theta) for average
    document.getElementById("Time_Best").innerHTML = "&Omega;(N log N)";     // Best case (balanced partition)

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";  // Recursive call stack space (log N)

    let i = l - 1;
    ele[h].style.background = 'red';  // Pivot element visualized in red

    for (let j = l; j <= h - 1; j++) {
        ele[j].style.background = 'brown';  // Elements being compared highlighted in brown
        await delay(time);

        if (parseInt(ele[j].style.height) < parseInt(ele[h].style.height)) {
            if (i >= l) {
                ele[i].style.background = 'yellow';  // Mark sorted elements in yellow
            }
            i++;
            swap(ele[i], ele[j]);  // Swap elements if they are smaller than the pivot
            ele[i].style.background = 'orange';  // Mark swapped element in orange
            await delay(time);
        }
        ele[j].style.background = 'yellow';  // Return elements to yellow if not swapped
    }
    
    if (i >= l) {
        ele[i].style.background = 'yellow';  // Re-mark element in yellow
    }

    await delay(time);
    swap(ele[i + 1], ele[h]);  // Place pivot in its correct position
    
    ele[h].style.background = 'yellow';  // Re-color pivot after swap
    await delay(time);

    // Return pivot index
    return i + 1;
}

async function qsort(ele, l, h) {
    if (l < h) {
        let p = await lomuto(ele, l, h);  // Get the pivot index
        await qsort(ele, l, p - 1);  // Sort left of pivot
        await qsort(ele, p + 1, h);  // Sort right of pivot
    } else {
        return;
    }
}

// Add event listener for Quick Sort button
document.getElementById('quick').addEventListener('click', async function() {
    let ele = document.querySelectorAll('.sort');
    let l = 0;
    let h = parseInt(ele.length) - 1;

    disableSizeSlider();
    disableSortingBtn();
    
    // Start quicksort on the entire array
    await qsort(ele, l, h);
    
    // Mark the entire array as sorted once sorting is complete
    for (let i = 0; i <= h; i++) {
        await delay(time);
        ele[i].style.background = '#47ff41ea';  // Mark as sorted in green
    }

    enableSizeSlider();
    enableSortingBtn();
});
